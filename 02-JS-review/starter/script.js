// books data
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// destructuring

const book = getBook(3);
book;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(genres);

// rest operator ...
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

// spread operator ...
const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedBook = {
  ...book,
  // adding new property
  moviePublicationDate: "2001-12-05",
  // overwriting existing property
  pages: 1200,
};
updatedBook;

// arrow functions
// expressions
const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

// template literal
const summary = `${title}, a ${pages} pages book was written by ${author} and published in ${getYear(
  publicationDate
)}`;

summary;

// tirnarry operator ?
const pagesRange = pages > 1000 ? "over a thousand" : "less than a 1000";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

// short circuiting and logical operators
// faslsy values: 0, '', null, undefined

console.log(false && "some value");
console.log(hasMovieAdaptation && "This book has a movieAdaptation");
console.log("Karem" && "some value");
console.log(null && "some value");

console.log("Karem" || "some value");
console.log(null || "some value");

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

const countWrong = book.reviews.librarything?.reviewsCount || "no data";
// countWrong;

// nullish coalescing operator ??
// this operato0r will rturn the second argument if the first is null or undefined
const count = book.reviews.librarything?.reviewsCount ?? "no data";
count;

// optional channing operator ?.
function getTotalRviewsCount(book) {
  // here we are utilizing the channing operator ?. and nullish coalescing operator ??
  const goodreadsCount = book?.reviews?.goodreads?.reviewsCount ?? 0;
  goodreadsCount;
  const librarythingCount = book?.reviews?.librarything?.reviewsCount ?? 0;
  librarythingCount;
  return goodreadsCount + librarythingCount;
}

console.log(getTotalRviewsCount(book));
*/

// the array map,filter and reduce functions (immutable => not mutate the original array)

const books = getBooks();

// optional channing operator ?.
function getTotalRviewsCount(book) {
  // here we are utilizing the channing operator ?. and nullish coalescing operator ??
  const goodreadsCount = book?.reviews?.goodreads?.reviewsCount ?? 0;
  goodreadsCount;
  const librarythingCount = book?.reviews?.librarything?.reviewsCount ?? 0;
  librarythingCount;
  return goodreadsCount + librarythingCount;
}

// use map function to create array of strings that contains all books title
const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalRviewsCount(book),
}));

console.log(essentialData);

// filter out books that have more than 500 pages
// if conditions is true, the curent book will be added to the filtered array
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooks);
console.log(longBooks.length);

const adventuresBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => ({
    title: book.title,
    genres: book.genres,
  }));

console.log(adventuresBooks);

// reduce method
// why its called redeuce?
//  simpliy to reduce the entire array to a single value 😂

// the number of pages for all books combined
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// array sort method (mutable)

const arr = [3, 7, 1, 9, 6];

// sort in acceding way
// a is the current element
// b is the next element
const sortedAsc = arr.slice().sort((a, b) => a - b);
const sortedDes = [...arr].sort((a, b) => b - a);

arr;
sortedAsc;
sortedDes;

const sortedByPagesDes = books
  .slice()
  .sort((a, b) => b.pages - a.pages)
  .map((books, i) => ({
    id: i + 1,
    title: books.title,
    pages: books.pages,
  }));

sortedByPagesDes;

// working with immutable arrays

// 1) add a new book to the books array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
  genres: ["fantasy", "adventure"],
  pages: 223,
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) remove a book from books array

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterAdd;

// update a book inside the books array

const booksAfterUpdate = booksAfterAdd.map((book) => {
  if (book.id === 1) {
    return {
      ...book,
      // updating the book pages
      pages: 1500,
    };
  }
  return book;
});

booksAfterUpdate;

// asynchronus JavaScript operations
// promises

// fetch('"https://jsonplaceholder.typicode.com/todos"')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// async/await

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
  return data;
}

const todos = await getTodos();
todos;
