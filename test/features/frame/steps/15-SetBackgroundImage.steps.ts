import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer una imagen de fondo a un objeto Frame", function(){});

When("LLame al método setBackgroundImage del objeto Frame", function(){
    expect(this).respondsTo("setBackgroundImage");
});

Then("El objecto Frame debe responder background image setted", function(){
    expect(this.setBackgroundImage()).to.be.eq("image setted");
});
