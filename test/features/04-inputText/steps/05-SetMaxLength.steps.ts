import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { inputText } from "../InputText";

Given("Que quiero establecer limite de caracteres del objeto InputText", function(){});

When("LLame al método setMaxLength de la clase InputText", function(){
    expect(inputText).respondsTo("setMaxLength");
});

Then("El objeto InputText debe responder max length setted", function(){
    expect(inputText.setMaxLength()).to.be.eq("max length setted");
});
