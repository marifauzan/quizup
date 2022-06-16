import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { setUser } from "../slice/user-slice";
import { useSelector, useDispatch } from "react-redux";

function Login() {
    //const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nowuser = useSelector((state) => state.userdetails.value);
    const dispatch = useDispatch();
    const [error, setError] = useState('');

    const errormodal = (
		<div id="alert-1" class="flex bg-red-100 text-red-700 px-3 py-3 rounded relative" role="alert">
			<span class="font-medium">Incorrect email and password. </span>
		</div>
	)

    const handleSubmit = async (e) => {
        e.preventDefault();  
        const users = await axios.get('https://616981a909e030001712c409.mockapi.io/users');
        const userLoggedIn = users.data.find(record => (record.email === email  && record.password === password));
        userLoggedIn ? dispatch(setUser(userLoggedIn)) : setError(errormodal);
        console.log(nowuser);
    };

        return (
            <div>
                {error}
            <div className="h-screen md:flex">
            <div
                className="relative overflow-hidden md:flex w-1/2 bg-rose-400 i justify-around items-center hidden">
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans">Quizup</h1>
                    <p className="text-white mt-1">Education is not the learning of facts, but training the mind to think.</p>
                    <Link to="/" type="submit" className="text-center block w-28 bg-white text-rose-500 mt-4 py-2 rounded-2xl font-bold mb-2">Back</Link>
                </div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form className="bg-white">
                    <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello!</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd" 
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd" />
                        </svg>
                        <input className="pl-2 outline-none border-none" type="text" name="" id="email" placeholder="Email address" required
                        onChange={e => setEmail(e.target.value)}
                        />
                    </div>
    
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd" />
                        </svg>
                        <input className="pl-2 outline-none border-none" type="password" name="" id="password" placeholder="Password" required
                        onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="block w-full bg-rose-400 hover:bg-purple-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                    onClick={handleSubmit}
                    >Login</button>
                    <Link to="/SignUp" className="text-sm ml-2 hover:text-rose-800 cursor-pointer underline decoration-pink-500" >Sign Up</Link>
                </form>           
            </div>
        </div>
        </div>
        ) 
    }


export default Login;