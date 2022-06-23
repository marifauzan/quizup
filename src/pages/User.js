import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import { selectUser } from "../slice/user-slice";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../slice/user-slice";

function User() {
    const dispatch = useDispatch();
    const nowuser = useSelector(selectUser);
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
    const handleLogout = () => {
        dispatch(setUser(null));
        window.location.href = '/';
    };

    const handleUser = (e) => {
        e.preventDefault()
		axios.put(`https://616981a909e030001712c409.mockapi.io/users/${nowuser.id}`, 
		{ 	
			full_name: name,  
			password: password 

		}).then(response => { dispatch(setUser(response.data));
            if(window.confirm("Are you sure want to change your username and password?")) {
                window.alert("Username and password changed.")
            };
			document.getElementById('edituser-form').reset();
            
		})
	}

    const deleteUser = (e) => {
        e.preventDefault()
		axios.delete(`https://616981a909e030001712c409.mockapi.io/users/${nowuser.id}`)
        .then(response => { 
            if(window.confirm("Are you sure want to delete this account?")) {
                handleLogout();
            };
		})
	}

    window.alertComponent = function () {
        return{
            openAlertBox: false,
            alertBackgroundColor: '',
            alertMessage: '',
            showAlert(type) {
                this.openAlertBox = true
                this.alertBackgroundColor = 'bg-green-500'
                this.alertMessage = `${this.successIcon} ${this.defaultSuccessMessage}`
                this.openAlertBox = true
            },
            successIcon: `<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2 text-white"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
            defaultSuccessMessage: `This alert contains success message.`,
        }
    }

    return(
        <div className="flex">
            <Sidebar />
            <div className="flex ml-32 md:items-center">
                <div className="mb-3 mx-16 md:items-center ">
                    <img src="https://cdn-icons-png.flaticon.com/512/3940/3940403.png" alt="avatar" className="ml-4 mb-5 w-36 h-36"></img>
                    <h1 className="text-3xl text-center font-semibold">{nowuser.full_name}</h1>
                    <p className="text-center">@{nowuser.username}</p>
                    <button onClick={deleteUser} className="text-center mt-10 rounded rounded-xl bg-red-700 px-9 py-2 text-white" >Delete this user</button>
                </div>
                <div className="ml-12">
                <form onSubmit={handleUser} className="w-full max-w-sm m-8 px-5 py-9 bg-white rounded-xl drop-shadow-md" id="edituser-form">
                <h1 className="block text-gray-500 font-semibold text-xl mb-5 ml-5">Change your username and password</h1>
                <div class="md:flex md:items-center m-6">
                    <div class="">
                    <label class="text-gray-500 font-semibold md:text-left md:mb-3 pr-4" for="inline-full-name">
                        Name
                    </label>
                    <input onChange= { e => e.target.value ? setName(e.target.value) : setName(nowuser.full_name)} 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded rounded-xl w-full py-2 px-9 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" id="inline-full-name" placeholder={nowuser.full_name}/>
                    </div>
                </div>
                <div class="md:flex md:items-center m-6">
                    <div class="">
                    <label class="text-gray-500 font-semibold md:text-left md:mb-3 pr-4" for="inline-password">
                        New Password
                    </label>
                    <input onChange={e => e.target.value ? setPassword(e.target.value) : setPassword(nowuser.password)} 
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded rounded-xl w-full py-2 px-9 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" type="password" id="inline-password" placeholder="Strong password" required/>
                    </div>
                </div>
                <div class="md:flex md:items-center">

                    <div class="ml-6">
                    <button type="submit"
                     className="block w-full bg-sky-500 py-2 px-3 rounded-xl text-white font-semibold mb-2 hover:bg-purple-600 ">
                        Change
                    </button>
                    </div>
                </div>
                </form>
                </div>
                
            </div>
            
        </div>
    )
}

export default User;