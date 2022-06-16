import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Quiz from "./page/Quiz";

function App() {
  const nowuser = useSelector((state: any) => state.userdetails.value);
  const route = (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );

  const LoggedInUser = (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Home />} />
          <Route path="/SignUp" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </>
  );
  return nowuser ? LoggedInUser : route;
}

export default App;
