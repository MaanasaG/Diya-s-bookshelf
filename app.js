/* ==========================================================
   Dia's Bookshelf — the code that draws the page.
   You should not need to change anything in here.
   All the books live in books.js
   ========================================================== */

/* ---------- little helpers ---------- */

// Makes text safe to put on the page (so quotes and < > don't break things).
function esc(text) {
  return String(text ?? "").replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

// A colour for every genre. Unknown genres get their own colour made up for them.
const GENRE_COLORS = {
  "Fantasy":            "#a58be0",
  "Adventure":          "#2fa8a0",
  "Mystery":            "#5b7fd4",
  "Realistic Fiction":  "#ff7a6b",
  "Historical Fiction": "#c98a4b",
  "Graphic Novel":      "#e069a8",
  "Nonfiction":         "#4a9d5f",
  "Poetry":             "#8f7ae0",
  "Science Fiction":    "#3aa8cf",
  "Animals":            "#e0a32f",
  "Humor":              "#f2a33c",
};

function genreColor(genre) {
  if (GENRE_COLORS[genre]) return GENRE_COLORS[genre];
  // make a repeatable colour from the letters of the genre name
  let hash = 0;
  for (let i = 0; i < String(genre).length; i++) {
    hash = String(genre).charCodeAt(i) + ((hash << 5) - hash);
  }
  return "hsl(" + (Math.abs(hash) % 360) + " 52% 58%)";
}

const SHELF_LABELS = {
  finished: "Finished",
  reading:  "Reading now",
  want:     "Want to read",
};

// Five stars, filled up to the rating (halves work too).
function starsHTML(rating) {
  const r = Math.max(0, Math.min(5, Number(rating) || 0));
  if (r === 0) {
    return '<span class="stars"><span class="stars-num">not rated yet</span></span>';
  }
  const pct = (r / 5) * 100;
  return (
    '<span class="stars" role="img" aria-label="' + r + ' out of 5 stars">' +
      '<span class="stars-track" aria-hidden="true">' +
        '<span class="stars-empty">★★★★★</span>' +
        '<span class="stars-fill" style="width:' + pct + '%">★★★★★</span>' +
      "</span>" +
      '<span class="stars-num" aria-hidden="true">' + r + "/5</span>" +
    "</span>"
  );
}

// "2026-08-21"  ->  "21 August 2026"
function prettyDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T12:00:00");
  if (isNaN(d)) return esc(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function coverHTML(book, color) {
  if (book.cover) {
    return '<img class="cover" src="' + esc(book.cover) + '" alt="Cover of ' + esc(book.title) + '" loading="lazy">';
  }
  const initials = String(book.title || "?")
    .split(/\s+/)
    .filter(function (w) { return /[a-z0-9]/i.test(w); })
    .slice(0, 2)
    .map(function (w) { return w[0].toUpperCase(); })
    .join("");
  return '<div class="cover" style="--spine:' + color + '" aria-hidden="true">' + esc(initials) + "</div>";
}

/* ---------- one book card ---------- */

function bookCardHTML(book) {
  const color = genreColor(book.genre);
  const shelf = SHELF_LABELS[book.shelf] ? book.shelf : "finished";

  const tags = (book.tags || [])
    .map(function (t) {
      return '<button class="tag" type="button" data-tag="' + esc(t) + '">#' + esc(t) + "</button>";
    })
    .join("");

  const bits = [];
  bits.push('<span class="badge badge-' + shelf + '">' + esc(SHELF_LABELS[shelf]) + "</span>");
  if (book.date)  bits.push("<span>Finished " + esc(prettyDate(book.date)) + "</span>");
  if (book.pages) bits.push("<span>" + esc(book.pages) + " pages</span>");

  return (
    '<article class="book" style="--spine:' + color + '">' +
      (book.favorite ? '<span class="fave" role="img" aria-label="One of my favourites">❤️</span>' : "") +
      '<div class="book-top">' +
        coverHTML(book, color) +
        "<div>" +
          '<h3 class="book-title">' + esc(book.title) + "</h3>" +
          '<p class="book-author">by ' + esc(book.author) + "</p>" +
          (book.series ? '<span class="series">' + esc(book.series) + " series</span>" : "") +
          "<div>" + starsHTML(book.rating) + "</div>" +
        "</div>" +
      "</div>" +
      (book.review ? '<p class="review">' + esc(book.review) + "</p>" : "") +
      '<div class="book-meta">' +
        bits.join('<span class="meta-sep">•</span>') +
        (tags ? '<span class="meta-sep">•</span>' + tags : "") +
      "</div>" +
    "</article>"
  );
}

/* ==========================================================
   Everything below only runs on the main bookshelf page.
   ========================================================== */

(function () {
  const shelfEl = document.getElementById("shelf");
  if (!shelfEl) return;

  const books = typeof BOOKS !== "undefined" && Array.isArray(BOOKS) ? BOOKS.slice() : [];

  const state = { shelf: "all", genre: "all", extra: new Set(), q: "", sort: "recent" };

  const searchEl = document.getElementById("search");
  const sortEl   = document.getElementById("sort");
  const countEl  = document.getElementById("resultCount");
  const emptyEl  = document.getElementById("empty");

  /* ----- build the filter chips ----- */

  function chip(label, value, group, color, count) {
    return (
      '<button class="chip" type="button" data-group="' + group + '" data-value="' + esc(value) + '" aria-pressed="false">' +
        (color ? '<span class="dot" style="background:' + color + '"></span>' : "") +
        esc(label) +
        (count != null ? ' <span class="count">' + count + "</span>" : "") +
      "</button>"
    );
  }

  function buildChips() {
    // Shelf
    const shelfCounts = { finished: 0, reading: 0, want: 0 };
    books.forEach(function (b) {
      if (shelfCounts[b.shelf] != null) shelfCounts[b.shelf]++;
      else shelfCounts.finished++;
    });
    document.getElementById("shelfChips").innerHTML =
      chip("All", "all", "shelf", null, books.length) +
      chip("Finished", "finished", "shelf", null, shelfCounts.finished) +
      chip("Reading now", "reading", "shelf", null, shelfCounts.reading) +
      chip("Want to read", "want", "shelf", null, shelfCounts.want);

    // Genre
    const genres = {};
    books.forEach(function (b) {
      const g = b.genre || "Other";
      genres[g] = (genres[g] || 0) + 1;
    });
    const genreHTML = Object.keys(genres)
      .sort()
      .map(function (g) { return chip(g, g, "genre", genreColor(g), genres[g]); })
      .join("");
    document.getElementById("genreChips").innerHTML =
      chip("All genres", "all", "genre", null, books.length) + genreHTML;

    // Extras
    document.getElementById("extraChips").innerHTML =
      chip("❤️ Favourites", "favorite", "extra") +
      chip("⭐ 4 stars and up", "top", "extra") +
      chip("📚 Part of a series", "series", "extra");

    // "All" starts switched on
    document.querySelector('#shelfChips .chip').setAttribute("aria-pressed", "true");
    document.querySelector('#genreChips .chip').setAttribute("aria-pressed", "true");
  }

  /* ----- stats ----- */

  function buildStats() {
    const done = books.filter(function (b) { return b.shelf === "finished"; });

    const pages = done.reduce(function (sum, b) { return sum + (Number(b.pages) || 0); }, 0);

    const rated = done.filter(function (b) { return Number(b.rating) > 0; });
    const avg = rated.length
      ? (rated.reduce(function (s, b) { return s + Number(b.rating); }, 0) / rated.length).toFixed(1)
      : "0";

    const tally = {};
    done.forEach(function (b) { tally[b.genre] = (tally[b.genre] || 0) + 1; });
    const top = Object.keys(tally).sort(function (a, b) { return tally[b] - tally[a]; })[0];

    document.getElementById("statFinished").textContent = done.length;
    document.getElementById("statPages").textContent = pages.toLocaleString();
    document.getElementById("statAvg").textContent = avg;

    const genreEl = document.getElementById("statGenre");
    genreEl.textContent = top || "–";
    if (top) genreEl.style.fontSize = top.length > 12 ? "1.25rem" : "1.6rem";

    document.getElementById("footerCount").textContent =
      books.length + " books on the shelf so far.";
  }

  /* ----- filtering & sorting ----- */

  function matches(book) {
    if (state.shelf !== "all" && (book.shelf || "finished") !== state.shelf) return false;
    if (state.genre !== "all" && book.genre !== state.genre) return false;

    if (state.extra.has("favorite") && !book.favorite) return false;
    if (state.extra.has("top") && Number(book.rating) < 4) return false;
    if (state.extra.has("series") && !book.series) return false;

    if (state.q) {
      const haystack = [book.title, book.author, book.genre, book.series, book.review]
        .concat(book.tags || [])
        .join(" ")
        .toLowerCase();
      if (haystack.indexOf(state.q) === -1) return false;
    }
    return true;
  }

  const SORTERS = {
    recent: function (a, b) {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;   // books with no finish date go last
      if (!b.date) return -1;
      return b.date.localeCompare(a.date);
    },
    rating: function (a, b) { return (Number(b.rating) || 0) - (Number(a.rating) || 0); },
    title:  function (a, b) { return String(a.title).localeCompare(String(b.title)); },
    author: function (a, b) { return String(a.author).localeCompare(String(b.author)); },
    pages:  function (a, b) { return (Number(b.pages) || 0) - (Number(a.pages) || 0); },
  };

  function render() {
    const list = books.filter(matches).sort(SORTERS[state.sort] || SORTERS.recent);

    shelfEl.innerHTML = list.map(bookCardHTML).join("");
    emptyEl.hidden = list.length > 0;

    countEl.textContent =
      list.length === books.length
        ? "Showing all " + books.length + " books"
        : "Showing " + list.length + " of " + books.length + " books";
  }

  /* ----- events ----- */

  document.querySelectorAll(".chips").forEach(function (group) {
    group.addEventListener("click", function (e) {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      const g = btn.dataset.group;
      const v = btn.dataset.value;

      if (g === "extra") {
        // extras toggle on and off on their own
        const on = btn.getAttribute("aria-pressed") === "true";
        btn.setAttribute("aria-pressed", on ? "false" : "true");
        if (on) state.extra.delete(v); else state.extra.add(v);
      } else {
        // shelf and genre pick just one at a time
        group.querySelectorAll(".chip").forEach(function (c) {
          c.setAttribute("aria-pressed", c === btn ? "true" : "false");
        });
        state[g] = v;
      }
      render();
    });
  });

  // clicking a #tag on a card searches for it
  shelfEl.addEventListener("click", function (e) {
    const tag = e.target.closest(".tag");
    if (!tag) return;
    searchEl.value = tag.dataset.tag;
    state.q = tag.dataset.tag.toLowerCase();
    render();
    searchEl.scrollIntoView({ block: "center" });
  });

  searchEl.addEventListener("input", function () {
    state.q = searchEl.value.trim().toLowerCase();
    render();
  });

  sortEl.addEventListener("change", function () {
    state.sort = sortEl.value;
    render();
  });

  /* ----- go ----- */

  buildChips();
  buildStats();
  render();
})();
