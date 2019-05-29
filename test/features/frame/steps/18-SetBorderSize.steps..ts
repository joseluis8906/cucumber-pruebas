import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer el ancho del borde de un objeto Frame", function(){});

When("LLame al método setBorderSize del objeto Frame", function(){
    expect(this).respondsTo("setBorderSize");
});

Then("El objecto Frame debe responder border size setted", function(){
    expect(this.setBorderSize(0)).to.be.eq("background size setted");
});
