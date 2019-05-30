import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer el nodo padre de un objeto Frame", function(){});

When("LLame al método setParent del objeto Frame", function(){
    expect(this).respondsTo("setParent");
});

Then("El objecto Frame debe responder parent setted", function(){
    expect(this.setParent({})).to.be.eq("parent setted");
});
