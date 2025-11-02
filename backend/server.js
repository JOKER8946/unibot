import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import facultyRoutes from "./routes/faculty.js";
import timetableRoutes from "./routes/timetable.js";
import notesRoutes from "./routes/notes.js";
import eventsRoutes from "./routes/events.js";
import chatRoutes from "./routes/chat.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

app.use("/api/faculty", facultyRoutes);
app.use("/api/timetable", timetableRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => res.send("UniBot Backend is Running 🚀"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
