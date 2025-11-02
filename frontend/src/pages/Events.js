import React, { useEffect, useState } from "react";
import axios from "axios";

function Events() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    description: ""
  });

  // ✅ Fetch events from backend
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      setEvents(res.data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  // ✅ Add new event
  const addEvent = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/events", newEvent);
      setNewEvent({ title: "", date: "", description: "" });
      fetchEvents();
    } catch (err) {
      console.error("Error adding event:", err);
    }
  };

  return (
    <div>
      <h2>🎉 Upcoming Events</h2>

      <form onSubmit={addEvent} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          required
        />
        <input
          type="date"
          placeholder="Date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          required
        />
        <button type="submit">Add Event</button>
      </form>

      {events.length === 0 ? (
        <p>No events yet!</p>
      ) : (
        <ul>
          {events.map(event => (
            <li key={event._id}>
              <strong>{event.title}</strong> — {event.date}
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Events;
