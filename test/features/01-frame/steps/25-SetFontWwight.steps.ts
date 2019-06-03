import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer la negrilla de un objeto Frame", function(){});

When("LLame al método setFontWeight del objeto Frame", function(){
    expect(frame).respondsTo("setFontWeight");
});

Then("El objecto Frame debe responder font weight setted", function(){
    expect(frame.setFontWeight("bold")).to.be.eq("font weight setted");
});
