import { useLoaderData } from "react-router";
import ReChart from "../../Utils/Reachart/ReChart";

const featuredBookIds = [1, 2, 3, 8, 5];

const chartLabels = {
  1: "The Great Gatsby",
  2: "To kill a mocking bird",
  3: "1984",
  8: "The Alchemist",
  5: "Pride and prejudice",
};

const PagesToRead = () => {
  const booksData = useLoaderData();
  const chartBooks = featuredBookIds
    .map((bookId) => booksData.find((book) => book.bookId === bookId))
    .filter(Boolean)
    .map((book) => ({
      ...book,
      chartLabel: chartLabels[book.bookId] ?? book.bookName,
    }));

  return (
    <section className="container mx-auto px-4 py-10 md:py-12">
      <div className="mx-auto max-w-[1170px]">
        <ReChart books={chartBooks} />
      </div>
    </section>
  );
};

export default PagesToRead;
