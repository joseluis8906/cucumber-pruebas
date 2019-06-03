import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer el tipo de cursor un objeto Frame", function(){});

When("LLame al método setCursor del objeto Frame", function(){
    expect(frame).respondsTo("setCursor");
});

Then("El objecto Frame debe responder cursor setted", function(){
    expect(frame.setCursor("RED")).to.be.eq("cursor setted");
});
