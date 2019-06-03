import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer el display un objeto Frame", function(){});

When("LLame al método setDisplay del objeto Frame", function(){
    expect(frame).respondsTo("setDisplay");
});

Then("El objecto Frame debe responder display setted", function(){
    expect(frame.setDisplay("Block")).to.be.eq("display setted");
});
