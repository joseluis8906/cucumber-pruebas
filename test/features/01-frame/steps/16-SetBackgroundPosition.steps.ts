import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer la posicion de una imagen de fondo a un objeto Frame", function(){});

When("LLame al método setBackgroundPosition del objeto Frame", function(){
    expect(frame).respondsTo("setBackgroundPosition");
});

Then("El objecto Frame debe responder background position setted", function(){
    expect(frame.setBackgroundPosition([0,0])).to.be.eq("background position setted");
});
