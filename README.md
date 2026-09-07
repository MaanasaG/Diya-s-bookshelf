# 📚 Diya's Bookshelf

A little website for Diya's book reviews and ratings.

## How to open it

Double-click **`index.html`**. That's it — it opens in your browser and works
even without the internet.

## How to add a book

Everything lives in **`books.js`**, and that's the only file you ever need to touch.

1. Open `books.js`.
2. Copy one of the blocks that's already there — everything from `{` down to `},`.
3. Paste it at the top of the list, just under the line `const BOOKS = [`.
4. Change the words inside the quote marks to your book.
5. Save, then refresh the website.

Every line inside a block ends with a comma, and the block itself ends with a
comma too. That's the one thing to watch out for.

## What you can fill in for each book

| Field | What it's for |
| --- | --- |
| `title`, `author` | the basics |
| `genre` | Fantasy, Mystery, Adventure, Graphic Novel… or invent your own and it gets its own colour |
| `series` | the series name, or `""` if it's a standalone |
| `rating` | 0 to 5, halves allowed (`4.5`) |
| `shelf` | `"finished"` or `"wishlist"` — that's the lot |
| `date` | when you finished it, like `"2026-08-21"` |
| `favorite` | `true` puts a ❤️ on the card |
| `pages` | counts towards your "pages read" total |
| `tags` | little words like `"magic"`, `"made me cry"` — clicking one searches for it |
| `cover` | a link to a cover picture (optional — otherwise you get a colourful one) |
| `review` | your paragraph |

## What the site does on its own

- Counts your books, pages and average rating, and works out your favourite genre
- Two shelves only: books you've **finished**, and your **wish list**
- Lets you filter by shelf, by genre, or by favourites
- Searches everything, including the words inside your reviews
- Sorts by newest, best rated, A–Z, or longest
- Looks good on a phone as well as a laptop

## The files

| File | What's inside |
| --- | --- |
| `books.js` | **your books — this is the only file you need to edit** |
| `index.html` | the bookshelf page |
| `styles.css` | the colours and design (all the colours are at the very top) |
| `app.js` | the code that draws the page |

## A note on the reviews that are already there

Those seven books are examples so the shelf isn't empty. Delete them and put your
own in whenever you like!
