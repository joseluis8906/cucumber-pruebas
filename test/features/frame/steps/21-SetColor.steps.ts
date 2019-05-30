import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer el color de fuente un objeto Frame", function(){});

When("LLame al método setColor del objeto Frame", function(){
    expect(this).respondsTo("setColor");
});

Then("El objecto Frame debe responder color setted", function(){
    expect(this.setColor("RED")).to.be.eq("color setted");
});
