import axios from "axios";
import React, { useEffect, useState } from "react";

function QuizCard({ id, title, description, images, rating }) {
  const [questions, setQuestions] = useState([]);

  localStorage.setItem("data_answer", JSON.stringify([]));

  // const [questionByIdQuiz, setQuestionByIdQuiz] = useState([]);

  const showRating = () => {   
    for(let i=0; i < rating; i++) 
    {       return               
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-6 w-6 bg-yellow" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2}
    >
    <path 
    strokeLinecap="round"   
    strokeLinejoin="round" 
    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
  />
</svg>  } }

  useEffect(() => {
    axios
      .get("https://616981a909e030001712c409.mockapi.io/questions/")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const dataQuestions = questions.filter(
      (question) => question.id_quiz === id
    );
    console.log(dataQuestions);
    localStorage.setItem("QuestionByIdQuiz", JSON.stringify(dataQuestions));
  }, [questions, id]);

  return (
    <div className="bg-white drop-shadow-md w-52 h-70 rounded-lg mr-4 mb-4">
      <a href="_blank">
        <img className="rounded-lg" src={images} alt="" />
      </a>
      <div className="p-5">
        <a href="_blank">
          <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="mb-3 text-xs text-gray-700">{description}</p>
        <p class="mb-3">
            {showRating}
        </p>
        <a
          href={`/quiz/${id}`}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Start quiz
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default QuizCard;
