import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer la alineacion vertical de un objeto Frame", function(){});

When("LLame al método setVAlign del objeto Frame", function(){
    expect(this).respondsTo("setVAlign");
});

Then("El objecto Frame debe responder vertical align setted", function(){
    expect(this.setVAlign(10)).to.be.eq("vertical align setted");
});
