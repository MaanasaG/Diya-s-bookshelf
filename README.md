# 📚 Diya's Bookshelf

A little website for Diya's book reviews and ratings.

## How to open it

Double-click **`index.html`**. That's it — it opens in your browser and works
even without the internet.

## How to add a book you've just finished

**The easy way**

1. Open the website and click the orange **+ Add a book** button.
2. Fill in the form. You'll see your review appear as you type.
3. Click **Copy the code**.
4. Open `books.js`, find the line `const BOOKS = [`, and paste right underneath it.
5. Save, then refresh the website.

**The hands-on way**

Open `books.js` and copy one of the blocks that's already there (everything from
`{` down to `},`), paste it at the top of the list, and change the words inside
the quote marks. Every line ends with a comma — that's the one thing to watch out for.

## What you can fill in for each book

| Field | What it's for |
| --- | --- |
| `title`, `author` | the basics |
| `genre` | Fantasy, Mystery, Adventure, Graphic Novel… or invent your own and it gets its own colour |
| `series` | the series name, or `""` if it's a standalone |
| `rating` | 0 to 5, halves allowed (`4.5`) |
| `shelf` | `"finished"`, `"reading"` or `"want"` |
| `date` | when you finished it, like `"2026-08-21"` |
| `favorite` | `true` puts a ❤️ on the card |
| `pages` | counts towards your "pages read" total |
| `tags` | little words like `"magic"`, `"made me cry"` — clicking one searches for it |
| `cover` | a link to a cover picture (optional — otherwise you get a colourful one) |
| `review` | your paragraph |

## What the site does on its own

- Counts your books, pages and average rating, and works out your favourite genre
- Lets you filter by shelf, by genre, by favourites, by 4-stars-and-up, or by series
- Searches everything, including the words inside your reviews
- Sorts by newest, best rated, A–Z, or longest
- Looks good on a phone as well as a laptop

## The files

| File | What's inside |
| --- | --- |
| `books.js` | **your books — this is the only file you need to edit** |
| `index.html` | the bookshelf page |
| `add.html` | the add-a-book helper |
| `styles.css` | the colours and design (all the colours are at the very top) |
| `app.js` | the code that draws the page |

## A note on the reviews that are already there

Those seven books are examples so the shelf isn't empty. Delete them and put your
own in whenever you like!
