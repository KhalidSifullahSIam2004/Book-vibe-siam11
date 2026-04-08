import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  getStoredReadList,
  getStoredWishList,
  setStoredReadList,
  setStoredWishList,
} from "../Components/Utils/localDB";

export const BookContext = createContext();

const Context = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState(() => getStoredReadList());
  const [wishList, setWishList] = useState(() => getStoredWishList());

  useEffect(() => {
    setStoredReadList(storedBooks);
  }, [storedBooks]);

  useEffect(() => {
    setStoredWishList(wishList);
  }, [wishList]);

  const handleMarkAsRead = (book) => {

    
    const isExist = storedBooks.find((bookData) => bookData.bookId === book.bookId);
    
    if(isExist) {
      toast.error("The book is already exist");
    } else {
      setStoredBooks([...storedBooks, book]);
      toast.success(`${book.bookName} is added to list`);
    }
  };
  
  
  const handleWishList = (book) => {

    const isExistInReadList = storedBooks.find((bookData) => bookData.bookId === book.bookId);

    if(isExistInReadList){
      toast.error("The book is already exist in read list");
      return;
    }

    const isExist = wishList.find((bookData) => bookData.bookId === book.bookId);

    if(isExist) {
      toast.error("The book is already exist");
    } else {
      setWishList([...wishList, book]);
      toast.success(`${book.bookName} is added to wish list`);
    }
  };

  const handleRemoveFromReadList = (bookId) => {
    const bookToRemove = storedBooks.find((bookData) => bookData.bookId === bookId);

    if (!bookToRemove) {
      toast.error("The book was not found in read list");
      return;
    }

    setStoredBooks(storedBooks.filter((bookData) => bookData.bookId !== bookId));
    toast.success(`${bookToRemove.bookName} removed from read list`);
  };

  const handleRemoveFromWishList = (bookId) => {
    const bookToRemove = wishList.find((bookData) => bookData.bookId === bookId);

    if (!bookToRemove) {
      toast.error("The book was not found in wish list");
      return;
    }

    setWishList(wishList.filter((bookData) => bookData.bookId !== bookId));
    toast.success(`${bookToRemove.bookName} removed from wish list`);
  };

  return (
    <BookContext value={{storedBooks,setStoredBooks, handleMarkAsRead, wishList, setWishList, handleWishList, handleRemoveFromReadList, handleRemoveFromWishList}}>
      {children}
    </BookContext>
  );
};

export default Context;
