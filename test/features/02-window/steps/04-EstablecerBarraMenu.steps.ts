import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { window } from "../Window";

Given("Que quiero establecer un menú a instancias de tipo Window", function(){});

When("LLame al método enableMenu de la clase Window", function(){
    expect(window).respondsTo("enableMenu");
});

Then("El objeto Window debe responder menu enabled", function(){
    expect(window.enableMenu()).to.be.eq("menu enabled");
});
