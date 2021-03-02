import express from 'express'
import dotenv from 'dotenv'
import userRouter from './src/routers/user.routes.js'
import postRouter from './src/routers/post.routes.js'

const app = express(),
    env = dotenv.config(),
    port = process.env.NODE_PORT || 3012;

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(port, () => console.log(`Server is ruuning ${port}`))