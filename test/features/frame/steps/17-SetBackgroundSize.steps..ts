import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer las dimensiones de una imagen de fondo a un objeto Frame", function(){});

When("LLame al método setBackgroundSize del objeto Frame", function(){
    expect(this).respondsTo("setBackgroundSize");
});

Then("El objecto Frame debe responder background size setted", function(){
    expect(this.setBackgroundSize([0,0])).to.be.eq("background size setted");
});
