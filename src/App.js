import React, { useState } from "react";
import Home from "../src/Components/Home";
import About from "./Components/AcademicCalendar";
import PersonalInfo from "../src/Components/PersonalInfo";
import CourseReg from "./Components/CourseRegistration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SuccessPage from "./Components/SuccessPage";

function App() {
  let [welcomeName, setWelcomeName] = useState("");

  return (
    <Router>
      <div className="App">
        <div className="flex_col">
          <div className="pages_div">
            <Routes>
              <Route path="/" element={<LoginPage />}>
                Home
              </Route>
              <Route path="/home" element={<Home welcomeName={welcomeName} />}>
                Home
              </Route>
              <Route
                path="/about"
                element={<About welcomeName={welcomeName} />}
              >
                About
              </Route>
              <Route
                path="/personal+info"
                element={
                  <PersonalInfo
                    welcomeName={welcomeName}
                    setWelcomeName={setWelcomeName}
                  />
                }
              >
                Personal Information
              </Route>
              <Route
                path="/course+registration"
                element={<CourseReg welcomeName={welcomeName} />}
              >
                Course Registration
              </Route>
              <Route
                path="/success"
                element={<SuccessPage welcomeName={welcomeName} />}
              >
                Success Page
              </Route>
            </Routes>
            
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
