import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { button, Button } from "../Button";
import { Frame } from "../../01-frame/Frame";

Given("Que quiero ejecutar eventos de mouse move de un objeto Button", function(){});

When("LLame al método mouseMove del objeto Button", function(){
    expect(button).respondsTo("mouseMove");
});

Then("El objeto Button debe responder mousemove handler added", function(){
    expect(button.addEvent('mousemove', () => {})).to.be.eq("handler added");
});
