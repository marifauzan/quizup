import React from "react";
import { NavLink } from "react-router-dom";

function LandingSideBar() {
  return (
    <aside className="w-60 relative h-screen top-0" aria-label="LandingSideBar">
      <div className="overflow-y-auto py-4 px-3 bg-white drop-shadow-md h-screen">
        <ul className="space-y-2">
          <li>
            <a
              href="/"
              className="ml-3 flex items-center mt-9 mb-6 text-2xl font-black text-sky-400 "
            >
              QUIZ
              <span className="font-black text-black text-lg">UP.</span>
            </a>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-violet-500 hover:bg-violet-200 rounded-lg flex items-center p-2 text-base font-normal"
                  : " text-gray-500  hover:bg-gray-200 rounded-lg flex items-center p-2 text-base font-normal"
              }
            >
              <svg
                className={`${({ isActive }) =>
                  isActive
                    ? "text-violet-500"
                    : "text-gray-500"} w-6 h-6 transition duration-75 group-hover:text-gray-900`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <a
              href="/sign-up"
              className="flex items-center p-2 text-base font-normal text-blue-500 rounded-lg hover:bg-blue-200"
            >
              <svg
                className="w-6 h-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
              </svg>
              <span className="ml-3">Sign Up</span>
            </a>
          </li>

          <li>
            <a
              href="/login"
              className="flex items-center p-2 text-base font-normal text-green-500 rounded-lg hover:bg-green-200"
            >
              <svg
                className="w-6 h-6 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-3">Login</span>
            </a>
          </li>
        </ul>
        <div
          id="dropdown-cta"
          className="p-4 mt-36 rounded-lg bg-gradient-to-r from-sky-500 to-purple-500"
          role="alert"
        >
          <div className="flex items-center mb-3">
            <span className="text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded bg-white">
              Quizup
            </span>
          </div>
          <p className="mb-3 text-sm text-white">
            Quizup is designed to train your mind and brain and develop your
            cognitive abilities. Please use this application wisely.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default LandingSideBar;
