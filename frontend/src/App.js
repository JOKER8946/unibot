import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Events from "./pages/Events";
import Timetable from "./pages/Timetable";
import Chat from "./pages/Chat";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/events" element={<Events />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
