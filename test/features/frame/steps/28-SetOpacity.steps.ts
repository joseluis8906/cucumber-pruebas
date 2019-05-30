import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer la opacidad de un objeto Frame", function(){});

When("LLame al método setOpacity del objeto Frame", function(){
    expect(this).respondsTo("setOpacity");
});

Then("El objecto Frame debe responder opacity setted", function(){
    expect(this.setOpacity(10)).to.be.eq("opacity setted");
});
