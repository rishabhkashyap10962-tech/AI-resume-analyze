import Courses from "./pages/Courses";

import InterviewQuestions from "./pages/InterviewQuestions";

import JobRecommendation from "./pages/JobRecommendation";
import SkillAnalysis from "./pages/SkillAnalysis";
import AtsScore from "./pages/AtsScore";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ResumeUpload from "./pages/ResumeUpload";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/upload" element={<ResumeUpload />} />

        <Route path="/ats-score" element={<AtsScore />} />

        <Route
  path="/skill-analysis"
  element={<SkillAnalysis />}
/>

<Route
  path="/job-recommendation"
  element={<JobRecommendation />}
/>
 
 <Route
    path="/interview-questions"
    element={<InterviewQuestions />}
/>
  
  <Route
    path="/courses"
    element={<Courses />}
/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;