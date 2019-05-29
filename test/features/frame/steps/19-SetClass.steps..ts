import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer la clase css de un objeto Frame", function(){});

When("LLame al método setClass del objeto Frame", function(){
    expect(this).respondsTo("setClass");
});

Then("El objecto Frame debe responder class setted", function(){
    expect(this.setClass("Frame")).to.be.eq("class setted");
});
