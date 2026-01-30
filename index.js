const express = require('express');
const cors = require('cors')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const authRouter = require('./routers/auth_router')

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connessione a MongoDB riuscita")
}).catch(err => {
    console.log(err)
})

app.use('/api/auth', authRouter)

app.get('/', (req, res) => {
    res.json({message: "Hello from server"})
})

app.listen(process.env.PORT, () => {
    console.log("Server is listening on port " + process.env.PORT)
})
