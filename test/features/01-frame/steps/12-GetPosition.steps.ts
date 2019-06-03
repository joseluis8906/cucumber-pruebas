import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero acceder la posición de un objeto Frame", function(){});

When("LLame al método getPosition del objeto Frame", function(){
    expect(frame).respondsTo("getPosition");
});

Then("El objecto Frame debe responder una tupla con X y Y", function(){
    expect(frame.getPosition()).to.be.an("array").length(2);
});
