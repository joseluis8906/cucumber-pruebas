import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer la dimension de fuente de un objeto Frame", function(){});

When("LLame al método setFontSize del objeto Frame", function(){
    expect(this).respondsTo("setFontSize");
});

Then("El objecto Frame debe responder font size setted", function(){
    expect(this.setFontSize(90)).to.be.eq("font size setted");
});
