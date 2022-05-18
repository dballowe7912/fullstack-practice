import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

const app = express()
const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.listen(
    PORT,
    console.log(`Server is listening in ${NODE_ENV} mode on port ${PORT}.`.yellow.bold)
)