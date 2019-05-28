import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero acceder la posición de un objeto Frame", function(){});

When("LLame al método getPosition del objeto Frame", function(){
    expect(this).respondsTo("getPosition");
});

Then("El objecto Frame debe responder una tupla con X y Y", function(){
    expect(this.getPosition()).to.be.an("array").length(2);
});
