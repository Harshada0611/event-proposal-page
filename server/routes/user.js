const router = require('express').Router();
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const fetchUser = require('../middleware/fetchUser');

dotenv.config();
const jwtSecret = process.env.JWT_SECRET

//ROUTE:1 creating new user(login not required)
router.post('/register', [
    body('name', "Enter a valid name!!").isAlpha('en-IN',{ignore: ' '}),
    body('email', "Enter a valid email!!").isEmail(),
    body('password', "Password length needs to be min 5 characters!!").isLength({min: 5})
], async (req, res)=>{
    console.log(req.body)
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            status: 'failure',
            message: errors.array()
        })
    }
    const {name, email, password, contact} = req.body
    try{
        //check if user already exists
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                status: 'failure',
                message: 'A user already exists with this email!'
            })
        }
        //generating hash
        const hash = await bcrypt.hash(password, 10);
        //creating new user
        user = await User.create({
            name,
            email,
            password: hash,
            contact
        })
        return res.status(201).json({
            status: 'success',
            user
        })
    }
    catch(e){
        return res.status(500).json({
            status: 'failure',
            message: e.message
        })
    }
})


//ROUTE:2- Logging in the existing user.
router.post('/login',[
    body('email', "Enter a valid email!!").isEmail(),
    body('password', "Password length needs to be min 5 characters!!").isLength({min: 5})
], async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            status: 'failure',
            message: errors.array()
        })
    }
    const {email, password} = req.body
    try{
        //check if user exists
        let user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({
                status: 'failure',
                message: "User doesn't exist please signup!!"
            })
        }
        //check if pasword matches
        const result = await bcrypt.compare(password, user.password)
        if (!result) {
            return res.status(400).json({
                status: 'failure',
                message: 'Invalid credentials'
            })
        }
        //generate a jwt
        const token = jwt.sign({
            data: user._id
        }, jwtSecret, {
            expiresIn: '1d'
        })
        return res.status(200).json({
            status: "success",
            token,
            name: user.name
        })
    }
    catch(e){
        return res.status(500).json({
            status: 'failure',
            message: e.message
        })
    }
})

//Route-3: to get selected proposal(user login required)
router.get('/selected', fetchUser, async(req, res)=>{
    try{
        const user = await User.findOne({_id: req.user}).populate('selected');
        res.status(200).json({
            status: 'success',
            selected: user.selected
        })
    }
    catch(e){
        return res.status(500).json({
            status: 'failure',
            message: e.message
        })
    }
})

//Route-4: Update selected proposal (user login required);
router.put('/selected', fetchUser, async(req, res)=>{
    try{
        const user = await User.updateOne({_id: req.user}, {$set: req.body})
        res.status(200).json({
            status: 'success',
            user
        })
    }
    catch(e){
        return res.status(500).json({
            status: 'failure',
            message: e.message
        })
    }
})
module.exports = router