import React, { useEffect, useState } from "react";
import axios from "axios";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({
    title: "",
    subject: "",
    semester: "",
    pdfLink: ""
  });

  // ✅ Fetch notes from backend
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/notes");
      setNotes(res.data);
    } catch (err) {
      console.error("Error fetching notes:", err);
    }
  };

  // Render only the notes list (no upload/add UI)
  return (
    <div>
      <h2>📘 Notes</h2>

      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note._id} style={{ marginBottom: 12 }}>
              <strong>{note.title}</strong>
              {note.subject ? ` — ${note.subject}` : ""}
              {note.semester ? ` (Sem ${note.semester})` : ""}
              <br />
              {note.pdfLink ? (
                <a href={note.pdfLink} target="_blank" rel="noreferrer">Open PDF</a>
              ) : (
                <span style={{ color: "#666" }}> No PDF link</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notes;
