import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>UniBot</h2>
      <nav>
        <Link to="/">🏠 Home</Link>
        <Link to="/notes">📘 Notes</Link>
        <Link to="/events">🎉 Events</Link>
        <Link to="/timetable">📅 Timetable</Link>
        <Link to="/chat">💬 Chat</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
