import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { inputText } from "../InputText";

Given("Que quiero establecer el placeholder del objeto InputText", function(){});

When("LLame al método setPlaceholder de la clase InputText", function(){
    expect(inputText).respondsTo("setPlaceholder");
});

Then("El objeto InputText debe responder placeholder setted", function(){
    expect(inputText.setPlaceholder("default")).to.be.eq("placeholder setted");
});
