import express from "express";
const router = express.Router();

// Example diet plans
router.get("/", (req, res) => {
  res.json({
    diets: [
      { goal: "Muscle Gain", plan: "High protein, 5 meals/day, chicken + rice + veggies" },
      { goal: "Fat Loss", plan: "Calorie deficit, 3 meals/day, oats + eggs + salad" },
      { goal: "Maintenance", plan: "Balanced macros, fruits + whole grains + lean meats" }
    ]
  });
});

export default router;
