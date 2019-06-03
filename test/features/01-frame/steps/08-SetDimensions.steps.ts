import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer las dimensiones de un objeto Frame", function(){});

When("LLame al método setSize del objeto Frame", function(){
    expect(frame).respondsTo("setSize");
});

Then("El objecto Frame debe responder dimension setted", function(){
    expect(frame.setSize(50,50)).to.be.eq("dimension setted");
});
