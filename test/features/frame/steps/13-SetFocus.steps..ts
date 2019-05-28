import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer el foco de un objeto Frame", function(){});

When("LLame al método setFocus del objeto Frame", function(){
    expect(this).respondsTo("setFocus");
});

Then("El objecto Frame debe responder focus setted", function(){
    expect(this.setFocus()).to.be.eq("focus setted");
});
