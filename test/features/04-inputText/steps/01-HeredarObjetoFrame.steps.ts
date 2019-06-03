import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { InputText, inputText } from "../InputText";
import { Frame } from "../../01-frame/Frame";

Given("Que InputText debe heredar de tipo Frame", function(){});

When("LLame al constructor de la clase InputText", function(){
    expect(inputText.constructor.name).to.be.eq("InputText");
});

Then("La instancia creada debe ser de tipo InputText y Frame", function(){
    expect(inputText).to.be.instanceOf(InputText).and.to.be.instanceOf(Frame);
});
