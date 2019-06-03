import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { button } from "../Button";

Given("Que quiero ejecutar eventos de mouse click de un objeto Button", function(){});

When("LLame al método addEvent del objeto Button", function(){
    expect(button).respondsTo("addEvent");
});

Then("El objeto Button debe responder click handler added", function(){
    expect(button.addEvent('click', () => {})).to.be.eq("handler added");
});
