import express from "express";
const router = express.Router();

// 📅 GET: Fetch timetable
router.get("/", (req, res) => {
  res.json([
    {
      branch: "AIML",
      semester: 5,
      day: "Monday",
      schedule: [
        { time: "9:00 AM - 10:00 AM", subject: "Machine Learning", faculty: "Prof. Jayanth K" },
        { time: "10:00 AM - 11:00 AM", subject: "Data Science", faculty: "Prof. Divya M" },
        { time: "11:15 AM - 12:15 PM", subject: "Python Lab", faculty: "Prof. Suresh K" }
      ]
    },
    {
      branch: "AIML",
      semester: 5,
      day: "Tuesday",
      schedule: [
        { time: "9:00 AM - 10:00 AM", subject: "Deep Learning", faculty: "Prof. Kiran R" },
        { time: "10:00 AM - 11:00 AM", subject: "AI Ethics", faculty: "Prof. Sneha L" },
        { time: "11:15 AM - 12:15 PM", subject: "Mini Project", faculty: "Prof. Divya M" }
      ]
    }
  ]);
});

// 🕒 POST: Add timetable entry (for admin use)
router.post("/", (req, res) => {
  const timetable = req.body;
  // later this will be stored in MongoDB
  res.json({ message: "Timetable added successfully!", data: timetable });
});

export default router;
