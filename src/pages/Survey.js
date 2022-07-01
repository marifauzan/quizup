import React from "react";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { questions } from "../data/SurveyQuestion";

function Survey() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [choice, setChoice] = useState(5);
  const [finish, setFinish] = useState("");

  const handleNext = () => {
    const nextQues = currentQ + 1;
    setCurrentQ(nextQues);
    setScore(parseInt(choice) + score);
    console.log(score);
    if (nextQues >= questions.length) {
      setCurrentQ(0);
      console.log(questions.length);
      setFinish("my-modal-4");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div>
        <div className="pt-20 pl-32 transition-all whitespace-normal w-96">
          <progress
            className="progress progress-error w-96 mb-16"
            value={currentQ}
            max={questions.length}
          ></progress>
          <p className="text-gray-500 text-xs h-12">
            Question {currentQ + 1} / {questions.length}
          </p>
          <div>
            <h1 className="text-gray-500 flex-1 text-xl h-16">
              {questions[currentQ]}
            </h1>
            <div className="rating rating-lg mt-12">
              <input
                type="radio"
                id="rate"
                name="rating"
                className="mask mask-star-2 bg-rose-400"
                value={1}
                onClick={(e) => setChoice(e.target.value)}
              />
              <input
                type="radio"
                id="rate"
                name="rating"
                className="mask mask-star-2 bg-rose-400"
                value={2}
                onClick={(e) => setChoice(e.target.value)}
              />
              <input
                type="radio"
                id="rate"
                name="rating"
                className="mask mask-star-2 bg-rose-400"
                value={3}
                onClick={(e) => setChoice(e.target.value)}
              />
              <input
                type="radio"
                id="rate"
                name="rating"
                className="mask mask-star-2 bg-rose-400"
                value={4}
                onClick={(e) => setChoice(e.target.value)}
              />
              <input
                type="radio"
                id="rate"
                name="rating"
                className="mask mask-star-2 bg-rose-400"
                value={5}
                onClick={(e) => setChoice(e.target.value)}
              />
            </div>
          </div>
          <button onClick={finish ? undefined : handleNext} className="">
            <label
              htmlFor={finish}
              className="px-6 py-1 bg-rose-500 text-white border-none rounded-xl mt-16 btn modal-button"
              disabled={finish}
            >
              {finish !== "" ? "Already responded" : "next"}
            </label>
          </button>
        </div>
      </div>

      <div className="absolute inset-y-0 right-0 w-80 bg-white mx-12 my-10 rounded-xl drop-shadow-md grid place-items-center p-8">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3940/3940401.png"
          alt="avatar"
          className="w-32 h-32"
        ></img>
        <h1 className="text-3xl text-center font-bold border-b-1">Help Us!</h1>
        <p className="text-sm text-gray-500">
          We want to make sure that we are providing value to you with our
          improvements and the only way to truly know is to hear from you. Your
          feedback will help us determine what features to add and how we can
          make the product better for you.
        </p>
        <a href="#my-modal-2" className="underline text-sm text-blue-300 ">
          Mind to share more of your thoughts?
        </a>
      </div>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label for="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" for="">
          <h3 className="text-lg font-bold">We love hearing from you!❤️</h3>
          <p className="py-4">Your saticfaction rate : {(score / 5) * 20}%</p>
          <p className="py-4">
            Thank you for reaching out and providing us with valuable feedback.
            Thank you for taking time out of your day to leave us this super
            kind review.
          </p>
          <div className="modal-action">
            <label for="my-modal-4" className="btn border-none bg-rose-500">
              Yay!
            </label>
          </div>
        </label>
      </label>

      <div className="modal" id="my-modal-2">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-gray-500">
            Give us more feedback 🐧
          </h3>
          <input type="textarea" className="w-full py-7 border-b-2"></input>
          <div className="modal-action">
            <a href="_blank" className="btn border-none bg-rose-500">
              Yay!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey;
