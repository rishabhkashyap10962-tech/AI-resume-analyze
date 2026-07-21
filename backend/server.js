require("dotenv").config();

const express = require("express");
const cors = require("cors");

console.log("MONGODB_URI:", process.env.MONGODB_URI);
console.log(
    "OPENROUTER_API_KEY:",
    process.env.OPENROUTER_API_KEY ? "Loaded ✅" : "Not Found ❌"
);

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const jobRoutes=require("./routes/jobRoutes");
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/jobs",jobRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);

app.get("/", (req, res) => {
    res.send("AI Placement Assistant Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server Running on Port ${PORT}`);
});