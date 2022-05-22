import express from 'express'
const router = express.Router()
import { 
    getTasks,
    getTaskById,
    deleteTask,
    addTask
} from '../controllers/tasksController.js'

router.route('/').get(getTasks).post(addTask)
router
    .route('/:id')
    .get(getTaskById)
    .delete(deleteTask)

export default router