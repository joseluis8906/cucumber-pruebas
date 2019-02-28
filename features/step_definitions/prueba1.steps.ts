import { Given, When, Then } from "cucumber"
import { expect } from "chai"

let n1: number, n2: number;

Given("I am a tester of sums", function(){});

When("I wanna sum {int} and {int}", function(n1_: number, n2_: number){
  n1 = n1_;
  n2 = n2_;
});

Then("the result of sum must be {int}", function(rs: number){
  expect(n1 + n2).to.be.equal(rs);
});

