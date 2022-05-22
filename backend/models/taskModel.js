import mongoose from "mongoose"

const taskSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        completed: { 
            type: Boolean, 
            required: true,
            default: false
        },
    },
)

const Task = mongoose.model('Task', taskSchema)

export default Task