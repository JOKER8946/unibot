import express from "express";
import Notes from "../models/Notes.js";

const router = express.Router();

// ✅ Get all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Notes.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// New: explicitly reject POST (uploads) with 405
router.post("/", (req, res) => {
  res.status(405).json({ error: "Uploads are disabled. Creating notes is not allowed." });
});

export default router;
