import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { inputText } from "../InputText";

Given("Que quiero reiniciar el value del objeto InputText", function(){});

When("LLame al método reset de la clase InputText", function(){
    expect(inputText).respondsTo("reset");
});

Then("El objeto InputText debe responder input reseted", function(){
    expect(inputText.reset()).to.be.eq("input reseted");
});
