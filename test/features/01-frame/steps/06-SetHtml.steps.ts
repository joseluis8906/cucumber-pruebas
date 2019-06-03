import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer el elemento html a un objeto Frame", function(){});

When("LLame al método setHtml del objeto Frame", function(){
    expect(frame).respondsTo("setHtml");
});

Then("El objecto Frame debe responder html setted", function(){
    expect(frame.setHtml("div")).to.be.eq("html setted");
});
