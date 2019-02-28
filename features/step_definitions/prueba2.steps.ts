import { Given, When, Then } from "cucumber"
import { expect } from "chai"

let n1: number, n2: number, n3: number;

Given("I am a tester of multiply", function(){});

When("I wanna multiply {int}, {int} and {int}", function(n1_: number, n2_: number, n3_: number){
  n1 = n1_;
  n2 = n2_;
  n3 = n3_;
});

Then("the result of product must be {int}", function(rs: number){
  expect(n1 * n2 * n3).to.be.equal(rs);
});

