import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../slice/user-slice";

function Home() {
    const nowuser = useSelector((state) => state.userdetails.value);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(setUser(null));
        window.location.href = '/';
    };

    return(
        <div>
            <h1>Hello, {nowuser.full_name}</h1>  
            <p>{nowuser.password}</p>  
            <button onClick={handleLogout}>Logout</button>  
        </div>

    )
}

export default Home;