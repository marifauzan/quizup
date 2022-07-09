import React from "react";
import { setUser } from "../../slice/user-slice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
function Sidebar() {
  //const nowuser = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUser(null));
    window.location.href = "/";
  };

  return (
    <aside className="w-60 relative h-screen top-0" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-6 bg-white drop-shadow-md h-screen">
        <ul className="space-y-4">
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
              to="/home"
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
            <NavLink
              to="/history"
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
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span className="ml-3">History</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user"
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
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className=" ml-3">User</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/survey"
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
                <path
                  fillRule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-3">Survey</span>
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center w-full text-left p-2 text-base font-normal text-red-500 rounded-lg  hover:bg-red-200"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-red-500 transition duration-75 group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className=" text-red-500 flex-1 ml-3 whitespace-nowrap">
                Logout
              </span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
export default Sidebar;
