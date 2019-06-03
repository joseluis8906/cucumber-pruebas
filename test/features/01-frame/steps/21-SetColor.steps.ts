import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer el color de fuente un objeto Frame", function(){});

When("LLame al método setColor del objeto Frame", function(){
    expect(frame).respondsTo("setColor");
});

Then("El objecto Frame debe responder color setted", function(){
    expect(frame.setColor("RED")).to.be.eq("color setted");
});
