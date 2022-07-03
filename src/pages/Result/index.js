import "./index.css";
import { useSelector } from "react-redux";
import { selectId, selectScore, selectUser } from "../../slice/user-slice";
import { useEffect, useState } from "react";
import axios from "axios";

function Result() {
  const id_quiz = useSelector(selectId);
  const score = useSelector(selectScore);
  const nowuser = useSelector(selectUser);
  const [status, setStatus] = useState([]);

  useEffect(() => {

    axios
    .put(`https://616981a909e030001712c409.mockapi.io/users/${nowuser.id}`, {
      history: [
        {
          "id_quiz": id_quiz,
          "score": score
        }
      ]
    })
    .then(
      () => {
        if (score > 75) {
          setStatus(Excellent());
          console.log(nowuser.history);
        } else if (score > 50 ) {
          setStatus(Notbad());
          console.log(nowuser.history);
        } else {
          setStatus(Poor());
          console.log(nowuser.history);
        }
      }
    )
  }, [id_quiz, score, nowuser])

  
  const Excellent = () => {
    return (
      <div>
        <h1 className="text-xl font-bold">
          Excellent!
        </h1>
        <p className="text-sm">
          Now that’s what I call a fine job. Analysis of available facts, evidence, observations, no probs! You make it look easy.
        </p>
      </div>
    )
  }
  const Notbad = () => {
    return (
      <div>
        <h1 className="text-xl font-bold">
          Not bad!
        </h1>
        <p className="text-sm">Stay self-directed, self-disciplined, and self-corrective thinking. I know you can do better than this. Keep on trying!</p>
      </div>
    )
  }
  
  const Poor = () => {
    return (
      <div>
        <h1 className="text-xl font-bold">
          Poor!
        </h1>
        <p className="text-sm">
          C'mon I know you can do better than this. Just keep on practicing.  Go get 'em, tiger!
        </p>
      </div>
    )
  }

  return (
    <div className="bg-sky-200">
     
      <div className="grid h-screen place-items-center ">
      <div class="card w-1/3 bg-base-100 shadow-xl">
        <figure class="px-10 pt-5 bg-sky-500 text-white flex">
          <img src="https://cdn-icons-png.flaticon.com/512/166/166750.png" className="w-24 h-24 mr-5" alt="mascot"/>
          <div className="pb-10 pt-10">
            {status}
          </div>
        </figure>
        <div class="card-body items-center text-center">
          <h1 class="text-xl font-bold">You scored <br></br>
          <span className="text-sky-600 text-5xl">
            {score}
          </span>
          </h1>
          <div className="stats">
          <div class="stat">
          <div class="stat-figure text-sky-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div class="stat-title">Correct</div>
          <div class="stat-value text-sm font-semibold text-sky-500">{score/10}</div>
          <div class="stat-desc">answers</div>
        </div>
        
        <div class="stat">
          <div class="stat-figure text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div class="stat-title">Wrong</div>
          <div class="stat-value text-sm font-semibold text-red-500">{10-(score/10)}</div>
          <div class="stat-desc">answers</div>
        </div>
          </div>
        </div>
      </div>
      <a href="/home" className="flex text-sm text-gray-700">
      <svg className="animate-bounce w-12 h-12" fill="#0082F0" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" /></svg>
      </a> 
      </div>
    </div>
  );
}

export default Result;
