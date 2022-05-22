import express from 'express'
const router = express.Router()
import { getTasks } from '../controllers/tasksController.js'

router.route('/').get(getTasks)

export default router