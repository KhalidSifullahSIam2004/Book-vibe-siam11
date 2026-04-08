import React, { use } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../ReadList/ReadList";
import WishList from "../WishList/WishList";
import { Sorting } from "../../../Context/SortingContext";

const sortOptions = [
  { value: "Pages-Low-To-High", label: "Pages(Low to High)" },
  { value: "Pages-High-To-Low", label: "Pages(High to Low)" },
  { value: "rating-Low-To-High", label: "Rating(Low to High)" },
  { value: "rating-High-To-Low", label: "Rating(High to Low)" },
];

const ListedBooks = () => {
  
  const {sortingType, setSortingType} = use(Sorting);

  return (
    <div className="container mx-auto">
      <h1 className="bg-gray-200 text-3xl font-bold py-8 rounded-2xl text-center my-9">
        Books
      </h1>

      <div className="flex justify-center mt-5 mb-20">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1 text-green-500 bg-green-100">
            Sort by: {sortingType} ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            {sortOptions.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  onClick={() => setSortingType(option.value)}
                  className={
                    sortingType === option.label
                      ? "bg-green-100 text-green-500"
                      : ""
                  }
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wish Books</Tab>
        </TabList>

        {/* read */}
        <TabPanel>
          <ReadList sortingType={sortingType} />
        </TabPanel>

        {/* wish */}
        <TabPanel>
          <WishList sortingType={sortingType} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
