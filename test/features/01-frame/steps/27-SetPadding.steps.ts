import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer el padding de un objeto Frame", function(){});

When("LLame al método setPadding del objeto Frame", function(){
    expect(frame).respondsTo("setPadding");
});

Then("El objecto Frame debe responder padding setted", function(){
    expect(frame.setPadding(10)).to.be.eq("padding setted");
});
