import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobDetails from "./pages/JobDetails";
import AddJob from "./pages/AddJob";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/add-job" element={<AddJob />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
