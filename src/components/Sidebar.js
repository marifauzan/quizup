import React from "react";
import { setUser } from "../slice/user-slice";
import { useDispatch } from "react-redux";
function Sidebar() {

    //const nowuser = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(setUser(null));
        window.location.href = '/';
    };

    return (
        <aside className="w-60 relative h-screen sticky top-0" aria-label="Sidebar" >
            <div className="overflow-y-auto py-4 px-3 bg-white drop-shadow-md">
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="flex items-center mt-5 mb-6 text-base font-normal text-gray-900 rounded-lg ">
                        <span className="ml-3 font-black text-gray-700 text-lg">QUIZUP</span>
                        </a>
                    </li>
                    <li>
                        <a href="/Home" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ">
                        <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                        <span className="ml-3 text-gray-500">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/History" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-200">
                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                        <span className=" text-gray-500 flex-1 ml-3 whitespace-nowrap">History</span>
                        </a>
                    </li>
                    <li>
                        <a href="/User" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-200">
                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        <span className=" text-gray-500 flex-1 ml-3 whitespace-nowrap">User</span>
                        </a>
                    </li>
                    <li>
                        <a href="/Survey" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-200">
                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
                        <span className="text-gray-500 flex-1 ml-3 whitespace-nowrap">Survey</span>
                        <span className="inline-flex justify-center items-center px-2 py-1 ml-3 text-xs font-medium text-white bg-purple-700 rounded-full">New</span>
                        
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-200">
                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                        <span className=" text-gray-500 flex-1 ml-3 whitespace-nowrap" onClick={handleLogout}>Logout</span>
                        </a>
                    </li>

                </ul>
                <div id="dropdown-cta" className="p-4 mt-12 rounded-lg bg-gradient-to-r from-sky-500 to-purple-500" role="alert">
                    <div className="flex items-center mb-3">
                        <span className="text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded bg-white">Beta</span>
                    </div>
                    <p className="mb-3 text-sm text-white">
                        Quizup is designed to train your mind and brain and develop your cognitive abilities. Please use this application wisely.
                    </p>
                </div>
            </div>
            </aside>
         
    )
}
 export default Sidebar;