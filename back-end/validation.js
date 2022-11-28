const express = require('express')
require("dotenv").config({ silent: true })
const jwt = require('jsonwebtoken')
const Joi = require('joi');

// basic validation of registration
const express = require('express')
require("dotenv").config({ silent: true })
const jwt = require('jsonwebtoken')
const Joi = require('joi');

// basic validation of registration
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