import { createBrowserRouter } from "react-router";
import MainLayout from "../Components/AllTimeShow/MainLayout/MainLayout";
import HomePage from "../Components/DynamicShow/HomePage/HomePage";
import Books from "../Components/DynamicShow/Books/Books";
import ErrorPage from "../Components/DynamicShow/ErrorPage/ErrorPage";
import BookDetails from "../Components/DynamicShow/BookDetails/BookDetails";
import ListedBooks from "../Components/DynamicShow/ListedBooks/ListedBooks";
import SignIn from "../Components/DynamicShow/SignIn/SignIn";
import SignUp from "../Components/DynamicShow/SignUIp/SignUp";
import { getBooksData } from "../Components/Utils/localDB";
import PagesToRead from "../Components/DynamicShow/PagesToRead/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/:id",
        loader: () => getBooksData(),
        element: <BookDetails />,
      },
      {
        path: '/listedbooks',
        element: <ListedBooks/>
      },
      {
        path: "/pages-to-read",
        loader: () => getBooksData(),
        element: <PagesToRead />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      }
    ]
  }
  
]);
