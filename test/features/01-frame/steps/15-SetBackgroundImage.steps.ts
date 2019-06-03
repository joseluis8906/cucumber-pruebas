import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer una imagen de fondo a un objeto Frame", function(){});

When("LLame al método setBackgroundImage del objeto Frame", function(){
    expect(frame).respondsTo("setBackgroundImage");
});

Then("El objecto Frame debe responder background image setted", function(){
    expect(frame.setBackgroundImage("src/pivote.png")).to.be.eq("image setted");
});
