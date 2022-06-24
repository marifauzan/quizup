import React from "react";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { questions } from "../data/SurveyQuestion";
import Rating from "../components/Rating";

function Survey() {
    const [currentQ, setCurrentQ] = useState(0);
    const [finish, setFinish] = useState('');

    const handleNext = () => {
        const nextQues = currentQ + 1;
        setCurrentQ(nextQues);
        console.log(questions.length)
        if (nextQues >= questions.length) {
            setCurrentQ(0);
            console.log(questions.length)
            setFinish('my-modal-4');
           
        }
        
      };

    return(
        <div className="flex">
            <Sidebar />
            <div>
                <div class="pt-20 pl-32 transition-all whitespace-normal w-96">
                    <progress class="progress progress-error w-96 mb-16" value={currentQ} max={questions.length}></progress>
                    <p className="text-gray-500 text-xs h-12">Question {currentQ+1} / {questions.length}</p>
                    <Rating question={questions[currentQ]}/>
                    <button onClick={!finish && handleNext} className="">
                        <label for={finish} class="px-6 py-1 bg-rose-500 text-white border-none rounded-xl mt-16 btn modal-button"  
                        disabled={finish}>
                            {finish !== '' ? "Already responded" : "next"}
                        </label>
                    </button>  
                </div>
            </div>
            
            <div class="absolute inset-y-0 right-0 w-80 bg-white mx-12 my-10 rounded rounded-xl drop-shadow-md grid place-items-center p-8">
                <img src="https://cdn-icons-png.flaticon.com/512/3940/3940401.png" alt="avatar" className="w-32 h-32"></img>
                <h1 className="text-3xl text-center font-bold border-b-1">Help Us!</h1>
                <p className="text-sm text-gray-500">We want to make sure that we are providing value to you with our improvements and the only way to truly know is to hear from you.
                    Your feedback will help us determine what features to add and how we can make the product better for you.
                </p>
                <a href="#my-modal-2" className="underline text-sm text-blue-300 ">Mind to share more of your thoughts?</a>
            </div>  

            
            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer">
            <label class="modal-box relative" for="">
                    <h3 class="text-lg font-bold">We love hearing from you!❤️</h3>
                    <p class="py-4">Thank you for reaching out and providing us with valuable feedback. 
                    Thank you for taking time out of your day to leave us this super kind review.
                    </p>
                    <div class="modal-action">
                        <label for="my-modal-4" class="btn border-none bg-rose-500">Yay!</label>
                    </div>
            </label>
            </label>

            <div class="modal" id="my-modal-2">
            <div class="modal-box">
                <h3 class="font-bold text-lg text-gray-500">Give us more feedback 🐧</h3>
                <input type="textarea" className="w-full py-7 border-b-2"></input>
                <div class="modal-action">
                <a href="#" class="btn border-none bg-rose-500">Yay!</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Survey;