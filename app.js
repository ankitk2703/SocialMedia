const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {MONGODBURL} = require("./keys")
const PORT = 5000

require('./models/user')

//nCgN6ms76I9IQuOh
app.use(express.json())
app.use(require('./routes/auth'))

mongoose.connect(MONGODBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on("connected", () => {console.log("MongoDB connected successfully")})
mongoose.connection.on("error", (err) => {console.log("MongoDB connection failed",err)})


app.listen(PORT, () => { console.log("Server is up on ", PORT)})