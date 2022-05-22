import asyncHandler from 'express-async-handler'
import Task from '../models/taskModel.js'

// @desc    Fetch all tasks
// @route   GET /api/tasklist
// @access  Public
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({})

  if (tasks) {
    res.send(tasks)
  } else {
    res.status(404)
    throw new Error('Tasks not found')
  }
})

// @desc    Fetch single task
// @route   GET /api/tasklist/:id
// @access  Public
const getTaskById = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)

  if (task) {
    res.json(task)
  } else {
    res.status(404)
    throw new Error("Task not found")
  }
})

// @desc    Delete a task
// @route   DELETE /api/tasklist/:id
// @access  Public
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)

  if (task) {
    await task.remove()
    res.json({ message: "Task removed" })
  } else {
    res.status(404)
    throw new Error("Task not found")
  }
})

// @desc    Create a task
// @route   POST /api/tasklist
// @access  Public
const addTask = asyncHandler(async (req, res) => {
  const task = new Task({
    name: req.body.name
  })

  const createdTask = await task.save()
  res.status(201).json(createdTask)
})

export { getTasks, getTaskById, deleteTask, addTask }