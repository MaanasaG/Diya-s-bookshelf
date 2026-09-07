/* ==========================================================
   DIYA'S BOOKSHELF — my book list
   ==========================================================

   This is the ONLY file you need to edit to add a new book.

   To add a book:
     1. Copy one whole block (from  {  down to  },  )
     2. Paste it at the top of the list, right under  const BOOKS = [
     3. Change the words inside the "quotation marks"
     4. Save the file and refresh the website

   What each line means:
     title        the name of the book
     author       who wrote it
     genre        pick one: Graphic Novel, Fantasy, Adventure, Mystery,
                  Realistic Fiction, Historical Fiction, Nonfiction,
                  Poetry, Science Fiction, Animals, Humor
                  (you can invent new ones too — a new colour is made for you)
     series       the series name, or "" if it is a standalone book
     number       which book it is in the series, or 0 if it isn't in one
     rating       any number from 0 to 5. Decimals are fine: 3.9, 4.2, 4.5
     shelf        "finished" = you read it, so you can rate and review it
                  "wishlist" = a book you want to read one day
     date         the day you finished it, written as "YYYY-MM-DD",
                  or "" if you can't remember
     favorite     true if it is an all-time favourite, otherwise false
     pages        how many pages (use 0 if you don't know)
     tags         little describing words, as many as you like
     cover        a link to a picture of the cover, or "" for a plain
                  coloured cover with the book's initials on it
     review       your paragraph about the book
                  (for a wish list book, write why you want to read it)

   Careful with commas! Every line inside a block ends with a comma,
   and every block ends with a comma too.
   ========================================================== */

const BOOKS = [
  {
    title: "Katie and the Cupcake Cure",
    author: "Coco Simon",
    genre: "Graphic Novel",
    series: "Cupcake Diaries",
    number: 1,
    rating: 4,
    shelf: "finished",
    date: "",
    favorite: true,
    pages: 0,
    tags: ["friendship", "middle school", "baking"],
    cover: "https://covers.openlibrary.org/b/id/7762197-M.jpg",
    review:
      "This is the first book in the series Cupcake Diaries. I loved this book so much! This book is about a girl named Katie. After Katie's friend moved on to the popular girls group, Katie was left with no friends on the first day of middle school!! Finally she makes 3 friends and together they make the Cupcake Club. Watch all the 4 girls grow with all their adventures in the Cupcake Club series!",
  },
  {
    title: "Katie, Batter Up!",
    author: "Coco Simon",
    genre: "Graphic Novel",
    series: "Cupcake Diaries",
    number: 5,
    rating: 3.9,
    shelf: "finished",
    date: "",
    favorite: false,
    pages: 0,
    tags: ["sports", "trying new things"],
    cover: "",
    review:
      "Have you ever had no activities to do? Well Katie feels the same way! When all of Katie's friends have so many activities to do, Katie has none. Katie tries out some sports. She finally found a sport she's good at…",
  },
  {
    title: "Mia's Baker's Dozen",
    author: "Coco Simon",
    genre: "Graphic Novel",
    series: "Cupcake Diaries",
    number: 6,
    rating: 4.1,
    shelf: "finished",
    date: "",
    favorite: false,
    pages: 0,
    tags: ["Spanish", "family", "school"],
    cover: "https://covers.openlibrary.org/b/id/7824674-M.jpg",
    review:
      "Even though Mia speaks Spanish at home, she's failing Spanish class! She speaks and understands it but reading and writing is way different. Otherwise things are good with Mia's stepdad, Eddie. But when it's time for parent-teacher conferences, who goes? Her mom of course, but Eddie or Dad? Do all 3 of them go?",
  },
  {
    title: "Emma All Stirred Up!",
    author: "Coco Simon",
    genre: "Graphic Novel",
    series: "Cupcake Diaries",
    number: 7,
    rating: 4.2,
    shelf: "finished",
    date: "",
    favorite: false,
    pages: 0,
    tags: ["brothers", "summer camp", "family"],
    cover: "https://covers.openlibrary.org/b/id/15087129-M.jpg",
    review:
      "Because Emma has 3 brothers she always has to change her plans, babysit her little brother, Jake, and… it's not fun! Emma's parents announced that Emma and Jake are going to the same camp! Emma is so frustrated. Can her summer plans get worse than this?",
  },
  {
    title: "Alexis Cool as a Cupcake",
    author: "Coco Simon",
    genre: "Graphic Novel",
    series: "Cupcake Diaries",
    number: 8,
    rating: 4.1,
    shelf: "finished",
    date: "",
    favorite: false,
    pages: 0,
    tags: ["being the leader", "teamwork", "baking"],
    cover: "https://covers.openlibrary.org/b/id/8475792-M.jpg",
    review:
      "Alexis loves being in charge of the Cupcake Club. But is being in charge boring? More importantly, is SHE boring? When Alexis takes a break from her duties as the \"leader\", things get out of hand. Can Alexis fix this?",
  },
];
