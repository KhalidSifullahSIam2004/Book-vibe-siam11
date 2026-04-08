import React, { use } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../ReadList/ReadList";
import WishList from "../WishList/WishList";
import { Sorting } from "../../../Context/SortingContext";
import { getSortLabel, SORT_OPTIONS } from "../../Utils/bookSorting";

const ListedBooks = () => {
  const {sortingType, setSortingType} = use(Sorting);
  const selectedSortLabel = getSortLabel(sortingType);

  return (
    <div className="container mx-auto">
      <h1 className="bg-gray-200 text-3xl font-bold py-8 rounded-2xl text-center my-9">
        Books
      </h1>

      <div className="flex justify-center mt-5 mb-30">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1 text-green-500 bg-green-100">
            {selectedSortLabel} v
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            {SORT_OPTIONS.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  onClick={() => setSortingType(option.value)}
                  className={
                    sortingType === option.value
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

        <TabPanel>
          <ReadList />
        </TabPanel>

        <TabPanel>
          <WishList />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
