import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer la visibilidad de un objeto Frame", function(){});

When("LLame al método setVisibility del objeto Frame", function(){
    expect(frame).respondsTo("setVisibility");
});

Then("El objecto Frame debe responder visibility setted", function(){
    expect(frame.setVisibility(1)).to.be.eq("visibility setted");
});
