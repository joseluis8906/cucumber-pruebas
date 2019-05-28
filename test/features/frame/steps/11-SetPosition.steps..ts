import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer la posición de un objeto Frame", function(){});

When("LLame al método setPosition del objeto Frame", function(){
    expect(this).respondsTo("setPosition");
});

Then("El objecto Frame debe responder position setted", function(){
    expect(this.setPosition(50,50)).to.be.eq("position setted");
});
