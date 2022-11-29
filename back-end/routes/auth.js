
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const User = require('../models/user');
const { registerValidation, loginValidation } = require('../validation');

router.post("/register", async (req, res) => {

    //validate user 
    const { error } = registerValidation(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    //check if already registered
    const emailExists = await User.findOne({ email: req.body.email });

    if (emailExists) {
        return res.status(400).json({ error: "Email already exists" });
    }

    //hash password
    const generatedsalt = await bcrypt.genSalt(10);
    const hashpswd = await bcrypt.hash(req.body.password, generatedsalt);

    //create user o bject and save it in Mongo (via try-catch)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        hashpswd
    });

    try {
        const savedUser = await user.save(); 
        res.json({ error: null, data: savedUser._id });
    } catch (error) {
        res.status(400).json({ error });
    }

});

router.post("/login", async (req, res) => {

    //validate user login info
    const { error } = loginValidation(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ error: "user not found" });
    }

    //check for password correctness
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
    if (!correctPassword) {
        return res.status(400).json({ error: "Password is incorrect" })
    }

    //create authentication token with username and id
    const generatedtoken = jwt.sign(
        {
            name: user.name,
            id: user._id
        },
        process.env.TOKEN_SECRET
    );

    res.header("auth-token", generatedtoken).json({
        error: null,
        data: { generatedtoken }
    });
})

module.exports = router;