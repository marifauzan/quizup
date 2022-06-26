import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { selectUser, setUser } from "../slice/user-slice";
import { useSelector, useDispatch } from "react-redux";
function SignUp() {
	const [fullname, setFullName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const nowuser = useSelector(selectUser);

	// const errormodal = (
	// 	<div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
	// 		<span class="font-medium">Error! </span>Something went wrong. Please try again later.
	// 	</div>
	// )

	const warningmodal = (
		<div id="alert-1" class="flex bg-yellow-100 text-yellow-700 px-3 py-3 rounded relative" role="alert">
			<span class="font-medium">Account has already exist. </span> Try Sign In.
			<button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-yellow-100 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex h-8 w-8 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300" data-dismiss-target="alert-1" aria-label="Close">
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
			</button>
		</div>
	)

	const addUser = () => {
		axios.post('https://616981a909e030001712c409.mockapi.io/users', 
		{ 	
			username: username, 
			full_name: fullname, 
			email: email, 
			password: password 

		}).then(response => {dispatch(setUser(response.data));})
	}

    const handleSubmit = async (e) => {
        e.preventDefault();
		const users = await axios.get('https://616981a909e030001712c409.mockapi.io/users');
        const userLoggedIn = users.data.find(record => record.email === email);
		userLoggedIn ? setError(warningmodal) : addUser();
    };

    return(
	<div>
		{error}
    <div className="h-screen md:flex">
		
	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form className="bg-white" onSubmit={handleSubmit}>
			<h1 className="text-gray-800 font-bold text-2xl mb-6">Sign Up</h1>
			<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fillRule="evenodd" 
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clipRule="evenodd" />
				</svg>
				<input className="pl-2 outline-none border-none" type="text" id="full_name" required placeholder="Full name" 
				onChange={e => setFullName(e.target.value)}
				/>
            </div>
			<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
					viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
				</svg>
				<input className="pl-2 outline-none border-none" type="text" id="username" required placeholder="Username" 
				onChange={e => setUsername(e.target.value)}
				/>
            </div>
			<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
					viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
						d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
				</svg>
				<input className="pl-2 outline-none border-none" type="text" id="email" required placeholder="Email Address" 
				onChange={e => setEmail(e.target.value)}
				/>
            </div>
			<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
						<path fillRule="evenodd"
							d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
							clipRule="evenodd" />
				</svg>
				<input className="pl-2 outline-none border-none" type="password" id="password" required placeholder="Password" 
				onChange={e => setPassword(e.target.value)}
				/>
            </div>
			<button type="submit" className="block w-full hover:bg-purple-600 bg-sky-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Sign Up</button>
            <Link to="/Login" className="text-sm ml-2 hover:text-rose-800 cursor-pointer underline decoration-blue-500" >Already have an account</Link>
		</form>
	</div>

    <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-r from-sky-500 to-purple-500 i justify-around items-center hidden">
		<div>
			<h1 className="text-white font-bold text-4xl font-sans">Quizup</h1>
			<p className="text-white mt-1">Education is not the learning of facts, but training the mind to think.</p>
		</div>
		<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
</div>
</div>
	
    )
}

export default SignUp;