import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import bodyParser from 'body-parser'
import connectDB from './config/db.js'
import taskRoutes from './routes/taskRoutes.js'

dotenv.config()

connectDB()

const app = express()
const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions))

app.use('/api/tasks', taskRoutes)

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.listen(
    PORT,
    console.log(`Server is listening in ${NODE_ENV} mode on port ${PORT}.`.yellow.bold)
)