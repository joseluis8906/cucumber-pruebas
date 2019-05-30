import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer la posicion de una imagen de fondo a un objeto Frame", function(){});

When("LLame al método setBackgroundPosition del objeto Frame", function(){
    expect(this).respondsTo("setBackgroundPosition");
});

Then("El objecto Frame debe responder background position setted", function(){
    expect(this.setBackgroundPosition([0,0])).to.be.eq("background position setted");
});
