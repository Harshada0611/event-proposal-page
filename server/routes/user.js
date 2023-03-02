const router = require('express').Router();
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

dotenv.config();
const jwtSecret = process.env.JWT_SECRET

//ROUTE:1 creating new user(login not required)
// router.post('/registration', [
//     body('name', "Enter a valid name!!").isAlpha('en-IN', { ignore: ' ' }),
//     body('email', "Enter a valid email!!").isEmail(),
//     body('password', isLength({ min: 5 })
// ], async (req, res) => {
//     console.log(req.body)"Password length needs to be min 5 characters!!").
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({
//             status: false,
//             message: errors.array()
//         })
//     }
//     const { name, email, password, contact } = req.body
//     try {
//         //check if user already exists
//         let user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({
//                 status: false,
//                 message: 'A user already exists with this email!'
//             })
//         }
//         //generating hash
//         const hash = await bcrypt.hash(password, 10);
//         //creating new user
//         user = await User.create({
//             name,
//             email,
//             password: hash,
//             contact
//         })
//         return res.status(201).json({
//             status: true,
//             message:'Account created successfully',
//             user
//         })
//     }
//     catch (e) {
//         return res.status(500).json({
//             status: false,
//             message: e.message
//         })
//     }
// })

router.post('/registration', async (req, resp) => {

    try {
        const existingUser = await User.findOne({ email: req.body.email })
        if (existingUser) {
            return resp.status(200).send({ success: false, message: 'User Credentials already exist' })
        }
        else {
            const password = req.body.password
            const saltRounds = 10
            const saltCode = await bcrypt.genSalt(saltRounds)
            const hashedPassword = await bcrypt.hash(password, saltCode)
            req.body.password = hashedPassword

            const newUser = new User(req.body)
            const newUserData = await newUser.save()
            console.log(newUserData)
            return resp.status(200).send({ success: true, message: 'Account Created Sucessfully' })
        }
    }
    catch (err) {
        console.log(err)
    }
})

//ROUTE:2- Logging in the existing user.
// router.post('/signin', [
//     body('email', "Enter a valid email!!").isEmail(),
//     body('password', "Password length needs to be min 5 characters!!").isLength({ min: 5 })
// ], async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({
//             status: 'failure',
//             message: errors.array()
//         })
//     }
//     const { contact, password } = req.body
//     try {
//         //check if user exists
//         let user = await User.findOne({ contact });
//         if (!user) {
//             return res.status(400).json({
//                 status: 'failure',
//                 message: "User doesn't exist please signup!!"
//             })
//         }
//         //check if pasword matches
//         const result = await bcrypt.compare(password, user.password)
//         if (!result) {
//             return res.status(400).json({
//                 status: 'failure',
//                 message: 'Invalid credentials'
//             })
//         }
//         //generate a jwt
//         const token = jwt.sign({
//             data: user._id
//         }, jwtSecret, {
//             expiresIn: '1d'
//         })
//         return res.status(200).json({
//             status: "success",
//             token,
//             name: user.name
//         })
//     }
//     catch (e) {
//         return res.status(500).json({
//             status: 'failure',
//             message: e.message
//         })
//     }
// })



router.post('/signin', async (req, resp) => {
    try {
        const user = await User.findOne({ contact: req.body.contact })
        if (user) {
            const matchPassword = await bcrypt.compare(req.body.password, user.password)
            console.log(matchPassword)
            console.log(user)
            console.log(req.body)
            if (matchPassword) {
                const dataToBeSentToFrontEnd = {
                    _id: user._id
                }
                //jwt.sign(payload, secretKey, expiryTime)
                const token = jwt.sign(dataToBeSentToFrontEnd, "secretKey", { expiresIn: '1d'})
                console.log(token)
                resp.status(200).json({ success: true, message: 'LogIn Successful', data: { token, name: user.name } })
            }
            else {
                resp.status(200).send({ success: false, message: 'Incorrect Password' })
            }
        }

        else {
            resp.status(200).send({ success: false, message: 'User Not Found' })
        }
    }
    catch (err) {
        resp.status(400).send(err)
    }
})

module.exports = router