import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quiz from "./page/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
