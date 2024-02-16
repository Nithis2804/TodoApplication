const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// Get all todos
router.get("/getTodoList", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a todo
router.post("/addTodoList", async (req, res) => {
  const todo = new Todo({
    task: req.body.task,
    deadline: req.body.deadline,
    status: req.body.status,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a todo
router.put("/updateTodoList/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo == null) {
      return res.status(404).json({ message: "Todo not found" });
    }
    if (req.body.task != null) {
      todo.task = req.body.task;
    }
    if (req.body.deadline != null) {
      todo.deadline = req.body.deadline;
    }
    if (req.body.status != null) {
      todo.status = req.body.status;
    }
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a todo
router.delete("/deleteTodoList/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo == null) {
      return res.status(404).json({ message: "Todo not found" });
    }
    await todo.remove();
    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
