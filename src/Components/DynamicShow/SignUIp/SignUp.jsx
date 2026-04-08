import React from "react";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <section className="container mx-auto px-4 py-14">
      <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900">Sign Up</h1>
        <p className="mt-2 text-gray-600">
          Create your Book Vibe account in a simple way.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="input input-bordered w-full"
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-sky-500 text-white hover:bg-sky-600"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="font-semibold text-green-600">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
