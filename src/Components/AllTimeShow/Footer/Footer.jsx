import React from "react";
import { Link } from "react-router";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/books", label: "Books" },
  { to: "/listedbooks", label: "Listed Books" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-gray-200 bg-[#f7f8f3]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">Book Vibe</h2>
            <p className="max-w-sm text-base leading-7 text-gray-600">
              Discover good books, organize your reading list, and keep your
              bookshelf feeling fresh.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <div className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="w-fit text-gray-600 transition duration-300 hover:text-green-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">
              Reading Corner
            </h3>
            <p className="text-gray-600 leading-7">
              Keep track of the books you want to read and the ones you already
              love.
            </p>
            <Link
              to="/listedbooks"
              className="inline-flex rounded-lg bg-green-500 px-5 py-3 font-semibold text-white transition duration-300 hover:bg-green-600"
            >
              View My List
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Book Vibe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
