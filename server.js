// server.js
import express from "express";
import cors from "cors";
import dietRoutes from "./routes/diet.js";  // ✅ added

const app = express();
app.use(cors());
app.use(express.json());

// Sample route: check API is alive
app.get("/", (req, res) => {
  res.json({ message: "Olympia AI Backend is running ✅" });
});

// ✅ our new diet API
app.use("/diet", dietRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
