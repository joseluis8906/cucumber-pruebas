import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero acceder al elemento html de un objeto Frame", function(){});

When("LLame al método getHtml del objeto Frame", function(){
    expect(frame).respondsTo("getHtml");
});

Then("El objecto Frame debe responder un elemento html", function(){
    expect(frame.getHtml()).to.be.an("string").and.eq("<div></div>");
});
