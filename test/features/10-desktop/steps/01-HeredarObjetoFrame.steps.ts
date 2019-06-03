import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { desktop, Desktop } from "../Desktop";
import { Frame } from "../../01-frame/Frame";

Given("Que Desktop debe heredar de tipo Frame", function(){});

When("LLame al constructor de la clase Desktop", function(){
    expect(desktop.constructor.name).to.be.eq("Desktop");
});

Then("La instancia creada debe ser de tipo Desktop y Frame", function(){
    expect(desktop).to.be.instanceOf(Desktop).and.to.be.instanceOf(Frame);
});
