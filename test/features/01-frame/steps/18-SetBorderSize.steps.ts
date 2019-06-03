import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer el ancho del borde de un objeto Frame", function(){});

When("LLame al método setBorderSize del objeto Frame", function(){
    expect(frame).respondsTo("setBorderSize");
});

Then("El objecto Frame debe responder border size setted", function(){
    expect(frame.setBorderSize(0)).to.be.eq("background size setted");
});
