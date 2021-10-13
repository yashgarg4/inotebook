const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Yashisagoodb$oy';

// ROUTE 1: create a user using: POST "/api/auth/createuser". no login required.
router.post('/createuser', [
    body('name', 'enter a valid name').isLength({ min: 3 }),
    body('email', 'enter a valid email').isEmail(),
    body('password', 'password must be atleast 5 characters').isLength({ min: 5 }),
    ], async(req, res) => {
    // if there are errors, return the bad request and the errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        // check whether the user with this email exists already
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({error: "Sorry a user with this email already exists"})
        }   
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        
        //create a new user
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        });

        const data = {
            user:{
                id: user.id
            }
        }
        const authToken =  jwt.sign(data, JWT_SECRET);
        
        // res.json(user)
        res.json({authToken})

    } catch (error) {
        console.error(error.message); 
        res.status(500).send("Internal server error");
    }
})


// ROUTE 2: Authenticate a user using: POST "/api/auth/login". no login required.

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
    ], async(req, res) => {

        // if there are errors, return the bad request and the errors.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {email, password} = req.body;
        try {
            let user = await User.findOne({email});
            if(!user){
                return res.status(400).json({error: "Please try to login with correct credentials"}); 
            }

            const passwordCompare = await bcrypt.compare(password, user.password);
            if(!passwordCompare){
                return res.status(400).json({error: "Please try to login with correct credentials"}); 
            }

            const data = {
                user:{
                    id: user.id
                }
            }
            const authToken =  jwt.sign(data, JWT_SECRET);
            res.json({authToken})


        } catch (error) {
            console.error(error.message); 
            res.status(500).send("Internal server error");
        }
})

module.exports = router
