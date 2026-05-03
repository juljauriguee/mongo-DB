const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const Task = require("../models/task.model");

router.get("/", (req, res) => {
  res.send("API Working");
});

module.exports = router;

// CREATE USER
router.post("/user", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// CREATE TASK
router.post("/task", async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// GET USERS
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// GET TASKS
router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.get("/tasks-with-users", async (req, res) => {
  const tasks = await Task.find().populate("userId");
  res.json(tasks);
});