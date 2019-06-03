import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer los margenes de un objeto Frame", function(){});

When("LLame al método setMargin del objeto Frame", function(){
    expect(frame).respondsTo("setMargin");
});

Then("El objecto Frame debe responder margin setted", function(){
    expect(frame.setMargin(10)).to.be.eq("margin setted");
});
