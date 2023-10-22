const express = require("express");
const router = express.Router();
//middleware
const fetchuser = require("../middleware/fetchuser");
// Connecting to Tasks schema
const Task = require("../models/Tasks");

//Route 1: Get all the notes using: GET "/api/tasks/fetchalltasks". Login required
router.get("/fetchalltasks", fetchuser, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Inernal Server error");
  }
});

//Route 2: Adding a new note using: POST "/api/tasks/addtask". Login required
router.post("/addtask", fetchuser, async (req, res) => {
  const { task, description, tag } = req.body;
  try {
    const newtask = new Task({
      task,
      description,
      tag,
      user: req.user.id,
    });
    const savedNote = await newtask.save();
    res.json(savedNote);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error");
  }
});

module.exports = router;
