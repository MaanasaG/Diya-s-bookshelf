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
     genre        pick one: Fantasy, Adventure, Mystery, Realistic Fiction,
                  Historical Fiction, Graphic Novel, Nonfiction, Poetry,
                  Science Fiction, Animals, Humor
                  (you can invent new ones too — a new colour is made for you)
     series       the series name, or "" if it is a standalone book
     rating       a number from 0 to 5. Halves are allowed, like 4.5
     shelf        "finished" = you read it, so you can rate and review it
                  "wishlist" = a book you want to read one day
     date         the day you finished it, written as "YYYY-MM-DD"
     favorite     true if it is an all-time favourite, otherwise false
     pages        how many pages (use 0 if you don't know)
     tags         little describing words, as many as you like
     review       your paragraph about the book
                  (for a wish list book, write why you want to read it)

   Careful with commas! Every line inside a block ends with a comma,
   and every block ends with a comma too.
   ========================================================== */

const BOOKS = [
  {
    title: "The Wild Robot",
    author: "Peter Brown",
    genre: "Adventure",
    series: "The Wild Robot",
    rating: 5,
    shelf: "finished",
    date: "2026-08-21",
    favorite: true,
    pages: 279,
    tags: ["robots", "animals", "island"],
    review:
      "Roz the robot washes up on a wild island and has to figure out how to survive with only animals for neighbours. I loved watching her learn animal languages and slowly turn into a real mum for a little gosling named Brightbill. The chapters are super short so it feels like you are flying through the book. The ending made me tear up a bit.",
  },
  {
    title: "Front Desk",
    author: "Kelly Yang",
    genre: "Realistic Fiction",
    series: "Front Desk",
    rating: 4.5,
    shelf: "finished",
    date: "2026-07-30",
    favorite: false,
    pages: 286,
    tags: ["brave", "family", "true-ish story"],
    review:
      "Mia is ten and she runs the front desk of a motel while her parents clean the rooms. She wants to be a writer even though everyone tells her English is not her first language so she should stick to maths. Mia is so stubborn in the best way. Some parts made me angry about how unfairly her family got treated, and that is exactly why it is a good book.",
  },
  {
    title: "The Girl Who Drank the Moon",
    author: "Kelly Barnhill",
    genre: "Fantasy",
    series: "",
    rating: 5,
    shelf: "finished",
    date: "2026-07-11",
    favorite: true,
    pages: 388,
    tags: ["witches", "magic", "dragons"],
    review:
      "A witch accidentally feeds a baby moonlight and fills her up with magic. There is a tiny dragon called Fyrian who thinks he is enormous and he is my favourite character in anything ever. The writing sounds like someone telling you a bedtime story out loud. It is a little slow at the start, then all the pieces click together and it is amazing.",
  },
  {
    title: "When You Reach Me",
    author: "Rebecca Stead",
    genre: "Mystery",
    series: "",
    rating: 4,
    shelf: "finished",
    date: "2026-06-18",
    favorite: false,
    pages: 197,
    tags: ["puzzle", "time travel", "friendship"],
    review:
      "Miranda starts getting notes from someone who somehow knows things that have not happened yet. I spent the whole book trying to guess the answer and I got it wrong. As soon as I finished it I flipped back to the beginning to find all the clues I missed. It is short but you have to pay attention.",
  },
  {
    title: "New Kid",
    author: "Jerry Craft",
    genre: "Graphic Novel",
    series: "New Kid",
    rating: 4.5,
    shelf: "finished",
    date: "2026-05-29",
    favorite: false,
    pages: 256,
    tags: ["school", "funny", "art"],
    review:
      "Jordan gets sent to a fancy new school where he is one of the only Black kids and he would much rather be at art school. The little drawings from his sketchbook in between chapters are so funny and also kind of sad. I read the whole thing in one afternoon.",
  },
  {
    title: "Keeper of the Lost Cities",
    author: "Shannon Messenger",
    genre: "Fantasy",
    series: "Keeper of the Lost Cities",
    rating: 0,
    shelf: "wishlist",
    date: "",
    favorite: false,
    pages: 512,
    tags: ["elves", "long book", "series"],
    review:
      "My friend says Sophie finds out she is an elf and moves to a hidden world. It is a really thick book and there are loads in the series, so I want to start it in the holidays.",
  },
  {
    title: "A Wrinkle in Time",
    author: "Madeleine L'Engle",
    genre: "Science Fiction",
    series: "Time Quintet",
    rating: 0,
    shelf: "wishlist",
    date: "",
    favorite: false,
    pages: 256,
    tags: ["space", "classic"],
    review:
      "Everybody keeps telling me I have to read this one, so it is next on my pile.",
  },
];
