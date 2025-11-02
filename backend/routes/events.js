import express from "express";
import Events from "../models/Events.js";

const router = express.Router();

// ✅ Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Events.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Add event
router.post("/", async (req, res) => {
  try {
    const newEvent = new Events(req.body);
    await newEvent.save();
    res.json({ message: "Event added", data: newEvent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
