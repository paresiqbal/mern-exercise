import express from "express";

const router = express.Router();

// Get all workouts
router.get("/", (req, res) => {
  res.json({ message: "Display all workouts" });
});

// Get individual workout
router.get("/:id", (req, res) => {
  res.json({ message: "Get individual workout" });
});

// Post a new workout
router.post("/", (req, res) => {
  res.json({ message: "Add new workout" });
});

// Delte a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a workout" });
});

// Update a workout
router.post("/:id", (req, res) => {
  res.json({ message: "Update a workout" });
});

export { router as workoutsRouter };
