import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer el display un objeto Frame", function(){});

When("LLame al método setDisplay del objeto Frame", function(){
    expect(this).respondsTo("setDisplay");
});

Then("El objecto Frame debe responder display setted", function(){
    expect(this.setDisplay("Block")).to.be.eq("display setted");
});
