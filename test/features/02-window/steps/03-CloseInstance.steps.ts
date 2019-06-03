import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { window } from "../Window";

Given("Que quiero poder cerrar un instancia de tipo Window", function(){});

When("LLame al método close de la clase Window", function(){
    expect(window).respondsTo("close");
});

Then("El objeto Window debe responder closed", function(){
    expect(window.close()).to.be.eq("closed");
});
