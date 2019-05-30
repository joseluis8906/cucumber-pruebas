import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer el color de fondo de un objeto Frame", function(){});

When("LLame al método setBackgroundColor del objeto Frame", function(){
    expect(this).respondsTo("setBackgroundColor");
});

Then("El objecto Frame debe responder background color setted", function(){
    expect(this.setBackgroundColor()).to.be.eq("background color setted");
});
