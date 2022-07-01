import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import LandingSideBar from "../components/LandingSidebar";
import QuizCard from "../components/QuizCard";
function LandingPage() {
  //const nowuser = useSelector(selectUser);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    axios
      .get("https://616981a909e030001712c409.mockapi.io/quiz/1")
      .then((response) => {
        setQuiz(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex">
        <LandingSideBar />
        <div className="flex overflow-hidden flex-wrap flex-col paragraph px-4">
        <h1 className="text-3xl text-gray-700 font-bold mt-10 ml-10 border-b-1">What's on Quizup?</h1>
        <p className="text-gray-400 text-sm font-semibold mt-4 ml-10 border-b-1">
        💎 We help you make a change and feel stronger. Try Quizup anywhere, at any time!
        </p>
        
        {quiz.length === 0 ? (
            <svg
              role="status"
              className="w-8 h-8 ml-20 mt-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          ) : (
            <div className="mt-10 pl-9 grid grid-cols-4 grid-flow-row gap-3">
            <div className="indicator">
            <span className="indicator-item mt-10 mr-8 px-4 py-5 font-semibold badge badge-primary bg-gradient-to-r from-purple-500 to-sky-500 border-none drop-shadow-md">try me</span>
                <QuizCard
                    key={quiz.id}
                    id={quiz.id}
                    title={quiz.title}
                    description={quiz.description}
                    images={quiz.images}
                />
            </div>
            <div className="bg-blue-50 drop-shadow-md w-52 h-70 rounded-lg mb-4 grid place-items-center">
              <svg className="w-8 h-8 mt-8" fill="lightgray" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
              <h1 className="text-center font-semibold text-xs text-gray-400"><a className="underline" href="/login">Sign In </a><br></br>to try another quiz</h1>
            </div> 
            </div>
          )}
         
        </div>        
        <div className="absolute inset-y-0 right-0 w-80 bg-white mx-8 my-8 rounded rounded-xl drop-shadow-md grid place-items-center p-8">
            <img src="https://cdn-icons-png.flaticon.com/512/1387/1387817.png" alt="avatar" className="w-32 h-32"></img>
            <h1 className="text-4xl text-sky-700 text-center font-bold border-b-1 flex">5.156 <span className="ml-2 mt-1 text-sm m-0 font-light italic">hoax issues*</span></h1>
            
            <p className="text-xs text-gray-500 p-2">*According to Kominfo statistical data regarding the findings of hoax issues from 2018 to 2020, the discovery of hoax issues in Indonesia reached 5,156 issues.
            Quizup is intented to improve higher order thinking skills because it can encourage people to be critical in analysis of available facts, evidence, observations, and arguments to form a judgement.
            </p>
            <a rel="noreferrer" target="_blank" href="https://eppid.kominfo.go.id/storage/uploads/2_12_Data_Statistik_Hoax__Agustus_2018_-_31_Maret_2020.pdf" className="px-20 py-2 rounded-xl border border-sky-500 text-xs text-sky-500 ">Read More</a>
        </div>  
    </div>
  );
}
export default LandingPage;
