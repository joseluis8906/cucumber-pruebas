import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer la negrilla de un objeto Frame", function(){});

When("LLame al método setFontWeight del objeto Frame", function(){
    expect(this).respondsTo("setFontWeight");
});

Then("El objecto Frame debe responder font weight setted", function(){
    expect(this.setFontWeight("bold")).to.be.eq("font weight setted");
});
