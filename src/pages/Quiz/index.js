import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  // const [score, setScore] = useState(0);
  // const [choice, setChoice] = useState(5);
  // const [finish, setFinish] = useState("");

  const questions = JSON.parse(localStorage.getItem("QuestionByIdQuiz"));

  const handleNext = () => {
    if (currentQuestion === questions.length) {
      return setCurrentQuestion(currentQuestion);
    }
    return setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    if (currentQuestion === 1) {
      return setCurrentQuestion(currentQuestion);
    }
    return setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div className="container p-8">
      <div className="flex flex-col">
        <div className="w-full dark:bg-yellow-100 rounded-full h-1.5 bg-yellow-100">
          <div
            className="dark:bg-yellow-500 h-1.5 rounded-full bg-yellow-500"
            style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
          ></div>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <div style={{ cursor: "pointer" }} onClick={handlePrevious}>
            Previous
          </div>
          <div>00:00:00</div>
        </div>
        <div className="flex flex-col items-center self-center w-10/12 mt-8">
          <div className="text-base font-bold text-center mb-2">
            Question {currentQuestion}/{questions.length}
          </div>
          <div className="text-base font-normal text-center mb-8">
            {questions[currentQuestion - 1].question}
          </div>
          <div className="flex flex-col gap-2 w-3/4">
            <div className="bg-slate-200 rounded-lg py-2 px-4">
              A. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="bg-slate-200 rounded-lg py-2 px-4">
              B. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="bg-slate-200 rounded-lg py-2 px-4">
              C. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="bg-slate-200 rounded-lg py-2 px-4">
              D. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-10"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
