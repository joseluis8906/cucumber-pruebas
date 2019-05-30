import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer el tipo de cursor un objeto Frame", function(){});

When("LLame al método setCursor del objeto Frame", function(){
    expect(this).respondsTo("setCursor");
});

Then("El objecto Frame debe responder cursor setted", function(){
    expect(this.setCursor("RED")).to.be.eq("cursor setted");
});
