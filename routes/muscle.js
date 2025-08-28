import express from "express";
const router = express.Router();

// Example muscles route
router.get("/", (req, res) => {
  res.json({
    muscles: [
      { name: "Biceps", exercise: "Barbell Curl" },
      { name: "Triceps", exercise: "Skull Crushers" },
      { name: "Chest", exercise: "Bench Press" }
    ]
  });
});

export default router;
