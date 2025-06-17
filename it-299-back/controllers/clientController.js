const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// Register new user
// route: /client/
const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, userName, email, password } = req.body
    console.log(req.body)

    if(!firstName || !lastName || !userName || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if exists
    const userExists = await User.findOne({ userName })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    //Hashy Hash
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Behold...Creation
    const user = await User.create({
        firstName,
        lastName,
        userName,
        email,
        password: hashedPassword,
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// Authenticate a user
// POST /clients

const loginUser = asyncHandler(async (req, res) => {
    const {userName, password} = req.body
    console.log(req.body)

    // check for email
    const user = await User.findOne({ userName: userName })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        console.log(req)
        throw new Error('Invalid credentials')
        
    }
})

const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}