const Joi = require('joi');

// basic validation of registration
const Joi = require('joi');



// basic validating registration
>>>>>>> 8ec329162025c0dde1de8973b57d7cbfb8a9a187
const registerValidation = (data) => {
    const schema = Joi.object(
        {
            name: Joi.string().min(2).max(255).required(),
            email: Joi.string().min(3).max(255).required(),
            password: Joi.string().min(6).max(255).required(),
        }
    )
    return schema.validate(data)
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// basic validation of login 
=======
>>>>>>> 3ce3625 (basic login)
=======
// basic validation of login 
>>>>>>> 0794272 (basic verification)
=======
>>>>>>> 8ec329162025c0dde1de8973b57d7cbfb8a9a187
const loginValidation = (data) => {
    const schema = Joi.object(
        {
            email: Joi.string().min(3).max(255).required(),
            password: Joi.string().min(6).max(255).required(),
        }
    )
    return schema.validate(data)
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0794272 (basic verification)
// veryifying our JWT
const verification = (req,res,next) =>{
    const token = req.header("auth-token")
    if(!token){
        return res.status(401).json({error: "protected data"})
    }
    try {
        const checkVerify = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = checkVerify
        next();
    }catch(err){
        res.status(400).json({error: "token not valid"})
    }
}

<<<<<<< HEAD
module.exports = {registerValidation, loginValidation, verification} 
=======

module.exports = { registerValidation}