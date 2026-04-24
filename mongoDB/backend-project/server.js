const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Student = require("./models/student");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.json({ message: "Saved successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/students", async (req, res) => {
  try {
    const data = await Student.find();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});