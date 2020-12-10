const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')



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

router.post('/signin', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).json({ error: "please add email or password" })
    }
    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid Email or password" })
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        
                        res.json({message:"Successfully SignIn"})
                    }
                    else {
                        return res.status(422).json({ error: "Invalid Email or password" })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        })
})
module.exports = router