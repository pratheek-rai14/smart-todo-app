const express = require("express");
const router = express.Router();

const Task = require("../models/Task");

router.post("/", async (req, res) => {
  try {
    const newTask = await Task.create({
      title: req.body.title,
    });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;