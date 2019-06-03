import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { desktop } from "../Desktop";

Given("Que el objeto Desktop debe abarcar las dimensiones del navegador", function(){});

When("LLame al método fill del objeto Desktop", function(){
    expect(desktop.constructor.name).to.be.eq("Desktop");
});

Then("El objeto Desktop debe responder space filled", function(){
    expect(desktop.fill()).to.be.eq("space filled");
});
