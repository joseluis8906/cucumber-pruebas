import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer el nivel de profundidad de un objeto Frame", function(){});

When("LLame al método setZIndex del objeto Frame", function(){
    expect(frame).respondsTo("setZIndex");
});

Then("El objecto Frame debe responder z-index setted", function(){
    expect(frame.setZIndex(1000)).to.be.eq("z-index setted");
});
