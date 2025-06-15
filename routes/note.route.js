const express = require("express");
const Note = require("../models/note.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Middleware to verify JWT
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Create Note
router.post("/", authMiddleware, async (req, res) => {
  const note = new Note({ ...req.body, userId: req.userId });
  await note.save();
  res.json(note);
});

// Get Notes
router.get("/", authMiddleware, async (req, res) => {
  const notes = await Note.find({ userId: req.userId });
  res.json(notes);
});

// Update Note
router.put("/:id", authMiddleware, async (req, res) => {
  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedNote);
});

// Delete Note
router.delete("/:id", authMiddleware, async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
});

module.exports = router;
