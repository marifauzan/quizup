import React from "react";
import { useSelector } from "react-redux";
import QuizCard from "../components/QuizCard";
import Sidebar from "../components/Sidebar";
import { selectUser } from "../slice/user-slice";

function Home() {
    const nowuser = useSelector(selectUser);

    return(
        <div className="flex">
            <Sidebar />
            {console.log(nowuser)}
            <div className="flex overflow-hidden flex-wrap flex-col paragraph px-4 ">
                <h1 className="text-2xl font-bold p-10 border-b-1">Welcome, {nowuser.full_name}</h1>

                <div className="flex mb-5">
                    <img src="/trophy.svg" className="w-8 h-8 ml-9" alt="trophy"/>
                    <h1 className="pl-2 mb-3 font-bold mr-4 text-gray-800 text-xl">Popular Courses</h1>
                </div>
                <div className="pl-9 grid grid-cols-4 grid-flow-row gap-3">
                 <QuizCard />
                 <QuizCard />
                 <QuizCard />
                 <QuizCard />
                 <QuizCard />
                 <QuizCard />
                </div>
                
            </div>

        </div>

    )
}

export default Home;