import { Link, useLoaderData, useParams } from "react-router";
import { FaRegStar } from "@react-icons/all-files/fa/FaRegStar";


const BookDetails = () => {

  const params = useParams();

  const booksData = useLoaderData();

  const findBook = booksData.find(bookData => bookData.bookId === Number(params.id));

  const {bookName, author, image, review, totalPages, publisher, yearOfPublishing, rating, tags } = findBook;   

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:grid-cols-2">
        <div className="rounded-2xl bg-gray-100 p-8">
          <img
            src={image}
            alt={bookName}
            className="mx-auto h-[60vh] rounded-2xl object-contain"
          />
        </div>
        <div className="space-y-5">
          <div>
            <h1 className="text-4xl font-bold text-[#131313]">{bookName}</h1>
            <p className="mt-3 text-xl text-gray-500">By : {author}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 border-y border-dashed border-gray-300 py-5">
            <span className="font-semibold text-[#131313]">{tags[0]}</span>
            <span className="flex items-center gap-2 text-gray-500">
            </span>
          </div>
          <p className="text-gray-600"><span className="font-bold text-[#131313]">Review:</span> {review}</p>
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-bold text-[#131313]">Tag</span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#e9e9e9] px-4 py-2 font-semibold text-[#23BE0A]"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="grid gap-3 text-gray-600">
            <p>
              <span className="font-semibold text-[#131313]">Number of Pages:</span>
              <span className="ml-[6%]">
              {totalPages}
              </span>
            </p>
            <p>
              <span className="font-semibold text-[#131313]">Publisher:</span>
              <span className="ml-[11%]">
              {publisher}
              </span>
            </p>
            <p>
              <span className="font-semibold text-[#131313]">Year of Publishing:</span>
              <span className="ml-[5%]">
              {yearOfPublishing}
              </span>
            </p>
            <p>
              <span className="font-semibold text-[#131313]">Rating:</span> 
              <span className="ml-[13%]">
              {rating}
              </span>
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/books"
              className="btn border bg-white"
            >
             Mark as Read
            </Link>
            <Link
              to="/books"
              className="btn btn-info text-white"
            >
             Add to Wishlist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
