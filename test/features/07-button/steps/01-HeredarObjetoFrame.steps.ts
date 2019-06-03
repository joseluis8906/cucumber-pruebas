import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { button, Button } from "../Button";
import { Frame } from "../../01-frame/Frame";

Given("Que Button debe heredar de tipo Frame", function(){});

When("LLame al constructor de la clase Button", function(){
    expect(button.constructor.name).to.be.eq("Button");
});

Then("La instancia creada debe ser de tipo Button y Frame", function(){
    expect(button).to.be.instanceOf(Button).and.to.be.instanceOf(Frame);
});
