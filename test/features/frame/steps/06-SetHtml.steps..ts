import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer el elemento html a un objeto Frame", function(){});

When("LLame al método setHtml del objeto Frame", function(){
    expect(this).respondsTo("setHtml");
});

Then("El objecto Frame debe responder html setted", function(){
    expect(this.setHtml("div")).to.be.eq("html setted");
});
