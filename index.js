const express = require("express")
const dotenv = require("dotenv").config()
const app = express()
const port = process.env.PORT || 6868
const userRoute = require("./routes/userRoute")
const connectDB = require("./database/db")
// const {errorHandler} = require("./middleware/error")

connectDB()

app.get(`/`, (req, res) => {
    res.send("home")
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(errorHandler)
app.use(userRoute)

app.listen(port, () => {
    console.log(`server started successfully at http://localhost:${port}`)
})