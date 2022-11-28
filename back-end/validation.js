const Joi = require('joi');
const joi = require('joi');

// basic validating registration
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

module.exports = { registerValidation}