import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { button } from "../Button";

Given("Que quiero establecer una imagen como icono de un objeto Button", function(){});

When("LLame al método setIcon del objeto Button", function(){
    expect(button).respondsTo("setIcon");
});

Then("El objeto Button debe responder icon setted", function(){
    expect(button.setIcon("icon.svg")).to.be.eq("icon setted");
});
