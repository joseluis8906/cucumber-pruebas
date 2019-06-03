import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer el color de fondo de un objeto Frame", function(){});

When("LLame al método setBackgroundColor del objeto Frame", function(){
    expect(frame).respondsTo("setBackgroundColor");
});

Then("El objecto Frame debe responder background color setted", function(){
    expect(frame.setBackgroundColor("RED")).to.be.eq("background color setted");
});
