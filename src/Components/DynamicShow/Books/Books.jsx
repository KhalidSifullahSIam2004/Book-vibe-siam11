import { use } from "react";
import { Link } from "react-router";
import { FaRegStar } from "@react-icons/all-files/fa/FaRegStar";
import { getBooksData } from "../../Utils/localDB";

const booksDataPromise = getBooksData();

const Books = () => {
  const booksData = use(booksDataPromise);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-6">Books</h2>

      <div className="grid grid-cols-1 justify-items-center gap-12 shadow-sm md:grid-cols-2 lg:grid-cols-3">
        {booksData.map((singleBookData) => (
          <Link
            to={`/books/${singleBookData.bookId}`}
            key={singleBookData.bookId}
            className="block h-full w-full max-w-96 rounded-2xl"
          >
            <div className="card h-full w-full bg-base-100 border border-gray-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <figure className="p-6 bg-[#F3F3F3] rounded-2xl m-6">
                <img
                  src={singleBookData.image}
                  alt={singleBookData.bookName}
                  className="rounded-2xl h-48 w-32"
                />
              </figure>

              <div className="mt-6 mx-6 grid min-h-14 grid-cols-2 gap-2 items-start">
                {singleBookData.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="badge justify-center bg-[#e9e9e9] text-[#23BE0A] font-bold px-4 py-2 whitespace-nowrap"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <div className="card-body pt-4">
                <h2 className="card-title font-bold text-2xl">
                  {singleBookData.bookName}
                </h2>
                <p className="font-medium text-lg text-gray-500">
                  By : {singleBookData.author}
                </p>
                <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4">
                  <p className="text-gray-500 text-lg">
                    {singleBookData.category}
                  </p>
                  <p className="text-gray-500 text-lg flex gap-2 items-center">
                    {singleBookData.rating} <FaRegStar />
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Books;
