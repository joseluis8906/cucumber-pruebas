import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero acceder a las dimensiones de un objeto Frame", function(){});

When("LLame al método getSize del objeto Frame", function(){
    expect(frame).respondsTo("getSize");
});

Then("El objecto Frame debe responder una tupla ancho y alto", function(){
    expect(frame.getSize()).to.be.an("array").length(2);
});
