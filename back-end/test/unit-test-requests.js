const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp)
const server = require("../server")

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCIsImlkIjoiNjM4OTUxMWMwYzBjMWU0ZDM2NzE2MjY2IiwiaWF0IjoxNjY5OTQzNTk2fQ.bYq_Oht3NTadhgpEx-Mlx-N-IkTFI3mxA5ENnB1w9e0"
const owner = "6389511c0c0c1e4d36716266"

describe("GET request to /requests", () => {
    it("it should respond with 200 status and object.",done => {
        chai.request(server)
            .get("/requests")
            .set("auth-token", authToken)
            .set("owner", owner)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a("Array")
                done()
            })
    })
})


describe("POST request to /requests", () => {
    it("it should respond with 200 status",done => {
        chai
            .request(server)
            .post("/requests")
            .set("auth-token", authToken)
            .set("owner", owner)
            .end((err, res) => {
                res.should.have.status(200)
                done()
            })
    })
})