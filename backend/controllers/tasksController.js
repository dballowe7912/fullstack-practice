import asyncHandler from 'express-async-handler'
import Task from '../models/taskModel.js'

// @desc    Fetch single task
// @route   GET /api/tasklist/:id
// @access  Public
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({})

  if (tasks) {
      console.log(tasks)
    res.send(tasks)
  } else {
    res.status(404)
    throw new Error('Task not found')
  }
})

export {
    getTasks
}