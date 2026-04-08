import React from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const defaultEmail = "reader@bookvibe.com";
const defaultPassword = "123456";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString();

    if (email !== defaultEmail || password !== defaultPassword) {
      toast.error("Invalid email or password, please try again");
      return;
    }

    toast.success("Signin Success");
    navigate("/");
  };

  return (
    <section className="container mx-auto px-4 py-14">
      <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900">Sign In</h1>
        <p className="mt-2 text-gray-600">
          Welcome back. Sign in to continue with Book Vibe.
        </p>

        <form onSubmit={handleSignIn} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              defaultValue={defaultEmail}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              defaultValue={defaultPassword}
              className="input input-bordered w-full"
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-green-500 text-white hover:bg-green-600"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          New here?{" "}
          <Link to="/signup" className="font-semibold text-sky-600">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
