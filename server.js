// server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Sample route: check API is alive
app.get("/", (req, res) => {
  res.json({ message: "Olympia AI Backend is running ✅" });
});

// More routes will go here (muscle, diet, trainer, etc.)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
