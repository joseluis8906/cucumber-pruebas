import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer la posición de un objeto Frame", function(){});

When("LLame al método setPosition del objeto Frame", function(){
    expect(frame).respondsTo("setPosition");
});

Then("El objecto Frame debe responder position setted", function(){
    expect(frame.setPosition(50,50)).to.be.eq("position setted");
});
