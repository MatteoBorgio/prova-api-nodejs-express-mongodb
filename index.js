const express = require('express');
const cors = require('cors')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')


const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.json({message: "Hello from server"})
})

app.listen(process.env.PORT, () => {
    console.log("Server is listening on port " + process.env.PORT)
})