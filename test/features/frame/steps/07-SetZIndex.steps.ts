import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer el nivel de profundidad de un objeto Frame", function(){});

When("LLame al método setZIndex del objeto Frame", function(){
    expect(this).respondsTo("setZIndex");
});

Then("El objecto Frame debe responder z-index setted", function(){
    expect(this.setZIndex(1000)).to.be.eq("z-index setted");
});
