const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')


router.get('/', (req, res) => {
    res.send('Hello')
})

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.status(422).json({ error: "Please add all the details" })
    }
    else {
        User.findOne({ email: email }).then((savedOne) => {
            if (savedOne) { return res.status(422).json({ error: "User already exist" }) }
            bcrypt.hash(password,12).then((hashpassword) => {
                const user = new User({
                    name,
                    email,
                    password:hashpassword
                })

                user.save().then(user => res.json({ message: "Saved Successfully" })).catch(error => { console.log(error) })
            })
              
        }).catch(error => { console.log(error) })
    }
})

module.exports = router