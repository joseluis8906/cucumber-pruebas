import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { window } from "../Window";

Given("Que quiero crear instancias de tipo Window", function(){});

When("LLame al método open de la clase Window", function(){
    expect(window).respondsTo("open");
});

Then("El objeto Window debe responder opened", function(){
    expect(window.open()).to.be.eq("opened");
});
