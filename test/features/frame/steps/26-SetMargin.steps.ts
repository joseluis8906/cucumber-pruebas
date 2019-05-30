import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer los margenes de un objeto Frame", function(){});

When("LLame al método setMargin del objeto Frame", function(){
    expect(this).respondsTo("setMargin");
});

Then("El objecto Frame debe responder margin setted", function(){
    expect(this.setMargin(10)).to.be.eq("margin setted");
});
