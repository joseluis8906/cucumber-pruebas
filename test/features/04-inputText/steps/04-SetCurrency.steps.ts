import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { inputText } from "../InputText";

Given("Que quiero establecer escritura monetaria del objeto InputText", function(){});

When("LLame al método setCurrency de la clase InputText", function(){
    expect(inputText).respondsTo("setCurrency");
});

Then("El objeto InputText debe responder currency mode setted", function(){
    expect(inputText.setCurrency()).to.be.eq("currency mode setted");
});
