import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer las dimensiones de una imagen de fondo a un objeto Frame", function(){});

When("LLame al método setBackgroundSize del objeto Frame", function(){
    expect(frame).respondsTo("setBackgroundSize");
});

Then("El objecto Frame debe responder background size setted", function(){
    expect(frame.setBackgroundSize([0,0])).to.be.eq("background size setted");
});
