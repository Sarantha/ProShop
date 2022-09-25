import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandeler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandeler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log("Server running on port 5000"))