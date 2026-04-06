import React from "react";
import bannerImage from "../../../assets/banner.png";
import Books from "../Books/Books";

const HomePage = () => {
  return (
    <>
    <div className="hero bg-base-200 container mx-auto min-h-[60vh] my-12 rounded-2xl shadow-lg">
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
        <img src={bannerImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="grid gap-12">
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn bg-green-500 text-white w-52 rounded-lg py-6">
            View The List
          </button>
        </div>
      </div>
    </div>
    <Books/>
    </>
  );
};

export default HomePage;
