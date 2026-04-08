const READ_LIST_KEY = "book-vibe-read-list";
const WISH_LIST_KEY = "book-vibe-wish-list";
const BOOKS_KEY = "book-vibe-books";

const isBrowser = typeof window !== "undefined";

const getStoredValue = (key, fallbackValue = []) => {
  if (!isBrowser) {
    return fallbackValue;
  }

  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : fallbackValue;
  } catch {
    return fallbackValue;
  }
};

const setStoredValue = (key, value) => {
  if (!isBrowser) {
    return;
  }

  localStorage.setItem(key, JSON.stringify(value));
};

export const getStoredReadList = () => getStoredValue(READ_LIST_KEY);

export const setStoredReadList = (books) => {
  setStoredValue(READ_LIST_KEY, books);
};

export const getStoredWishList = () => getStoredValue(WISH_LIST_KEY);

export const setStoredWishList = (books) => {
  setStoredValue(WISH_LIST_KEY, books);
};

export const getStoredBooks = () => getStoredValue(BOOKS_KEY);

export const setStoredBooks = (books) => {
  setStoredValue(BOOKS_KEY, books);
};

export const getBooksData = async () => {
  const storedBooks = getStoredBooks();

  if (storedBooks.length > 0) {
    return storedBooks;
  }

  const response = await fetch("/booksData.json");
  const books = await response.json();

  setStoredBooks(books);

  return books;
};
