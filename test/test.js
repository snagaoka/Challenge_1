var chai = require('chai'),
	should = chai.should;

var functions = require('../challenge_1.js');
console.log(functions);

describe("Sum of a Multiple", function () {
	it("should return '23' for n=10", function () {
		functions.add(10).should.equal(23);
	});
})