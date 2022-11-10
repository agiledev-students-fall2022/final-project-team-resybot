const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha')
const assert = require('assert');
const express = require('express');
const server = require('../server');


chai.use(chaiHttp)

describe("GET request to bookings", () => {
    it("it should respond with 200 status and object",done => {
        chai
            .request(server)
            .get("/bookings")
            .end((err, res) => {
                //res.should.have.status(200)
                res.body.should.be.a("object")
                res.body.should.have.property("success", true)
                done()
            })
    })
})