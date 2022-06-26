import React from "react";
import { useSelector } from "react-redux";
//import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Quiz from "./page/Quiz";
import History from "./pages/History";
import User from "./pages/User";
import { selectUser } from "./slice/user-slice";
import Survey from "./pages/Survey";

function App() {
  const nowuser = useSelector(selectUser);

  const LoggedInUser = (
    <>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={nowuser ? <Navigate to="/Home"/> : <Login />} />
          <Route path="/SignUp" element={nowuser ? <Navigate to="/Home"/> : <SignUp />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/User" element={<User />}/>
          <Route path="/Survey" element={<Survey />}/>
          <Route path="/History" element={<History />}/>
          <Route path="/" element={nowuser ? <Navigate to="/Home"/> : <LandingPage />} />
        </Routes>
      </Router>
    </>
  );
  return LoggedInUser;
}

export default App;
