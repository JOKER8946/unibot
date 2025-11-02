import express from "express";
import Faculty from "../models/Faculty.js";

const router = express.Router();

// Get all faculty
router.get("/", async (req, res) => {
  const faculty = await Faculty.find();
  res.json(faculty);
});

// Add new faculty
router.post("/", async (req, res) => {
  const data = new Faculty(req.body);
  await data.save();
  res.json({ message: "Faculty added", data });
});

export default router;
