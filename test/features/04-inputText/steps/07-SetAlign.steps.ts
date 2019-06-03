import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { inputText } from "../InputText";

Given("Que quiero establecer la alineación del contenido del objeto InputText", function(){});

When("LLame al método setTextAlign de la clase InputText", function(){
    expect(inputText).respondsTo("setTextAlign");
});

Then("El objeto InputText debe responder text align setted", function(){
    expect(inputText.setTextAlign("justify")).to.be.eq("text align setted");
});
