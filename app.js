require('dotenv').config()

const express = require('express')
const routes = require('./routes')

const cors = require('cors')

const port = 8888
const app = express()
const cookieParser = require("cookie-parser")
// const bodyParser = require('body-parser')


// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.use(express.urlencoded({ extended:true }))

app.set("view engine", "ejs")

app.use(cookieParser())
app.use(routes)

app.listen(port, () => {
    console.log(`server jalan di ${port}`)
})