import React from "react";
import Sidebar from "../../parts/Sidebar";
import { useState } from "react";
import { questions } from "../../data/SurveyQuestion";

function Survey(): JSX.Element {
  const [currentQ, setCurrentQ] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [choice, setChoice] = useState<string>("5");
  const [finish, setFinish] = useState<string>("");

  const handleNext = () => {
    const nextQues = currentQ + 1;
    setCurrentQ(nextQues);
    setScore(parseInt(choice) + score);
    if (nextQues >= questions.length) {
      setCurrentQ(0);
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
                onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
                  setChoice((e.target as HTMLInputElement).value)
                }
              />
              <input
                type="radio"
                id="rate"
                name="rating"
                className="mask mask-star-2 bg-rose-400"
                value={2}
                onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
                  setChoice((e.target as HTMLInputElement).value)
                }
              />
              <input
                type="radio"
                id="rate"
                name="rating"
                className="mask mask-star-2 bg-rose-400"
                value={3}
                onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
                  setChoice((e.target as HTMLInputElement).value)
                }
              />
              <input
                type="radio"
                id="rate"
                name="rating"
                className="mask mask-star-2 bg-rose-400"
                value={4}
                onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
                  setChoice((e.target as HTMLInputElement).value)
                }
              />
              <input
                type="radio"
                id="rate"
                name="rating"
                className="mask mask-star-2 bg-rose-400"
                value={5}
                onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
                  setChoice((e.target as HTMLInputElement).value)
                }
              />
            </div>
          </div>
          <button
            onClick={finish ? undefined : handleNext}
            disabled={finish ? true : false}
          >
            <label
              htmlFor={finish}
              className="px-6 py-1 bg-rose-500 text-white border-none rounded-xl mt-16 btn modal-button"
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
        <label
          htmlFor="my-modal"
          className="modal-button underline text-sm text-blue-300 "
        >
          Mind to share more of your thoughts?
        </label>
      </div>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">We love hearing from you!❤️</h3>
          <p className="py-4">Your satisfaction rate : {(score / 5) * 20}%</p>
          <p className="py-4">
            Thank you for reaching out and providing us with valuable feedback.
            Thank you for taking time out of your day to leave us this super
            kind review.
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-4" className="btn border-none bg-rose-500">
              Yay!
            </label>
          </div>
        </label>
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Give us more feedback 🐧</h3>
          <form>
            <input type="textarea" className="w-full py-7 px-3 border-b-2" />
            <div className="modal-action">
              <button type="reset">
                <label
                  htmlFor="my-modal"
                  className="btn border-none hover:bg-rose-600 bg-rose-500"
                >
                  Yay!
                </label>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Survey;
