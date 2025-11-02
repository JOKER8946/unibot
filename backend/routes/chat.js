import express from "express";
const router = express.Router();

// 💬 Temporary Chat Route
router.post("/", (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  // Placeholder response — Gemini will replace this in future update
  const sampleResponse = [
    "I'm UniBot — your campus assistant 🤖.",
    "This AI chat feature is coming soon! 🚧",
    "Stay tuned for updates.",
  ];

  // Return a random placeholder response
  const randomReply =
    sampleResponse[Math.floor(Math.random() * sampleResponse.length)];

  res.json({
    question,
    answer: randomReply,
    status: "AI module under development 🧠",
  });
});

router.get("/", (req, res) => {
  res.send("UniBot Chat route — AI feature coming soon! 🚧");
});
// JUST A COMMIT

export default router;
