import React, { useState } from "react";
import { NavLink } from "react-router";

const navLinkClass = ({ isActive }) =>
  isActive ? "text-green-500 border border-green-500" : "";

const mobileNavLinkClass = ({ isActive }) =>
  [
    "rounded-lg px-4 py-3 text-center font-semibold transition duration-300",
    isActive
      ? "border border-green-500 text-green-500"
      : "border border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-600",
  ].join(" ");

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="navbar px-0">
          <div className="navbar-start">
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <h2 className="font-bold text-3xl">Book Vibe</h2>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="font-semibold mr-4">
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>
              <li className="font-semibold mr-4">
                <NavLink to="/listedbooks" className={navLinkClass}>
                  Listed Books
                </NavLink>
              </li>
              <li className="font-semibold mr-4">
                <NavLink to="/pages-to-read" className={navLinkClass}>
                  Pages to Read
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="navbar-end gap-2 md:gap-4">
            <NavLink
              to="/signin"
              className="btn bg-green-500 text-white hover:scale-90 transition-all duration-1000"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="btn btn-info text-white hover:scale-90 transition-all duration-1000"
            >
              Sign Up
            </NavLink>
          </div>
        </div>

        {isMenuOpen && (
          <div className="pb-4 lg:hidden">
            <div className="grid gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <NavLink
                to="/"
                className={mobileNavLinkClass}
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/listedbooks"
                className={mobileNavLinkClass}
                onClick={closeMenu}
              >
                Listed Books
              </NavLink>
              <NavLink
                to="/pages-to-read"
                className={mobileNavLinkClass}
                onClick={closeMenu}
              >
                Pages to Read
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
