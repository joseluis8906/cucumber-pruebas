import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { window } from "../Window";

Given("Que quiero establecer un contenedor layout a instancias de tipo Window", function(){});

When("LLame al método setLayout de la clase Window", function(){
    expect(window).respondsTo("enableTitleBar");
});

Then("El objeto Window debe responder layout setted", function(){
    expect(window.enableTitleBar()).to.be.eq("title bar enabled");
});
