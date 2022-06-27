import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
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
          <Route path="/home" element={<Home />} />
          <Route
            path="/login"
            element={nowuser ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/sign-up"
            element={nowuser ? <Navigate to="/home" /> : <SignUp />}
          />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/user" element={<User />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/history" element={<History />} />
          <Route
            path="/"
            element={nowuser ? <Navigate to="/home" /> : <LandingPage />}
          />
        </Routes>
      </Router>
    </>
  );
  return LoggedInUser;
}

export default App;
