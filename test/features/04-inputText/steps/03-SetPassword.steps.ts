import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { inputText } from "../InputText";

Given("Que quiero establecer escritura secreta del objeto InputText", function(){});

When("LLame al método setPassword de la clase InputText", function(){
    expect(inputText).respondsTo("setPassword");
});

Then("El objeto InputText debe responder secret mode setted", function(){
    expect(inputText.setPassword()).to.be.eq("secret mode setted");
});
