import React from 'react';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
        <Routes> 
          <Route path="/" element={<LandingPage />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/SignUp" element={<SignUp />}/>
        </Routes>
    </Router>
  );
}

export default App;
