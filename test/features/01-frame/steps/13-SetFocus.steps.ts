import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer el foco de un objeto Frame", function(){});

When("LLame al método setFocus del objeto Frame", function(){
    expect(frame).respondsTo("setFocus");
});

Then("El objecto Frame debe responder focus setted", function(){
    expect(frame.setFocus()).to.be.eq("focus setted");
});
