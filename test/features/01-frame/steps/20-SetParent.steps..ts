import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer el nodo padre de un objeto Frame", function(){});

When("LLame al método setParent del objeto Frame", function(){
    expect(frame).respondsTo("setParent");
});

Then("El objecto Frame debe responder parent setted", function(){
    expect(frame.setParent({})).to.be.eq("parent setted");
});
