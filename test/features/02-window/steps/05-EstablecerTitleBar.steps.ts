import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { window } from "../Window";

Given("Que quiero establecer una barra de titulo a objetos de tipo Window", function(){});

When("LLame al método enableTitleBar de la clase Window", function(){
    expect(window).respondsTo("enableTitleBar");
});

Then("El objeto Window debe responder title bar enabled", function(){
    expect(window.enableTitleBar()).to.be.eq("title bar enabled");
});
