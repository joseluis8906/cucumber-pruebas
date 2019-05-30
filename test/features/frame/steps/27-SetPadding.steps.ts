import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer el padding de un objeto Frame", function(){});

When("LLame al método setPadding del objeto Frame", function(){
    expect(this).respondsTo("setPadding");
});

Then("El objecto Frame debe responder padding setted", function(){
    expect(this.setPadding(10)).to.be.eq("padding setted");
});
