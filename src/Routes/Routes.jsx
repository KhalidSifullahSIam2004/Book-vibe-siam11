import { createBrowserRouter } from "react-router";
import MainLayout from "../Components/AllTimeShow/MainLayout/MainLayout";
import HomePage from "../Components/DynamicShow/HomePage/HomePage";
import Books from "../Components/DynamicShow/Books/Books";
import ErrorPage from "../Components/DynamicShow/ErrorPage/ErrorPage";
import BookDetails from "../Components/DynamicShow/BookDetails/BookDetails";

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
        loader:  () => fetch("/booksData.json"),
        element: <BookDetails />,
      }
    ]
  }
  
]);
