const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require("../server")


chai.use(chaiHttp)

//Verifying the retrieving of data in the search route

describe("GET request to search", () => {
    it("it should respond with 200 status and object",done => {
        chai
            .request(server)
            .get("/search")
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a("Array")
                done()
            })
    })
})
