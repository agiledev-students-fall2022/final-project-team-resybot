const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp)
const server = require("../server")

describe("GET request to /requests", () => {
    it("it should respond with 200 status and object",done => {
        chai
            .request(server)
            .get("/requests")
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a("Array")
                done()
            })
    })
})