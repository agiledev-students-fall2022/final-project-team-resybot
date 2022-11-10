const request = require('supertest');
const assert = require('assert');
const express = require('express');
const bookings = require('./bookings');


const app = express();

it('bookings running', () => {
    return request(app)


})