import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const Context = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

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

  return (
    <BookContext value={{storedBooks,setStoredBooks, handleMarkAsRead, wishList, setWishList, handleWishList}}>
      {children}
    </BookContext>
  );
};

export default Context;
