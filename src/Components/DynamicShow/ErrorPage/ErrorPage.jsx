import { isRouteErrorResponse, useRouteError, Link } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "Something went wrong";
  let message = "An unexpected routing error happened.";

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`;
    message =
      error.data?.message || "The page you requested was not found.";
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-white px-6">
      
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center">
        
      
        <h1 className="text-7xl font-extrabold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h1>

       
        <p className="mt-4 text-gray-300">{message}</p>

        
        <div className="mt-8 flex gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-linear-to-r from-purple-500 to-indigo-600 hover:scale-105 transition-all duration-300 font-semibold"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition"
          >
            Go Back
          </button>
        </div>

      </div>
    </section>
  );
};

export default ErrorPage;
