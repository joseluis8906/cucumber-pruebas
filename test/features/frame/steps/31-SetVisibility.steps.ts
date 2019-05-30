import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer la visibilidad de un objeto Frame", function(){});

When("LLame al método setVisibility del objeto Frame", function(){
    expect(this).respondsTo("setVisibility");
});

Then("El objecto Frame debe responder visibility setted", function(){
    expect(this.setVisibility(10)).to.be.eq("visibility setted");
});
