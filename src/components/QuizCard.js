import React from "react";

function QuizCard({ id, title, description, images }) {
  return (
    <div class="bg-white drop-shadow-md w-52 h-70 rounded-lg mr-4 mb-4">
      <a href="_blank">
        <img class="rounded-lg" src={images} alt="" />
      </a>
      <div class="p-5">
        <a href="_blank">
          <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p class="mb-3 text-xs text-gray-700">{description}</p>
        <a
          href={`/quiz/${id}`}
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Start quiz
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default QuizCard;
