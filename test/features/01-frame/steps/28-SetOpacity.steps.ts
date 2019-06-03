import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer la opacidad de un objeto Frame", function(){});

When("LLame al método setOpacity del objeto Frame", function(){
    expect(frame).respondsTo("setOpacity");
});

Then("El objecto Frame debe responder opacity setted", function(){
    expect(frame.setOpacity(10)).to.be.eq("opacity setted");
});
