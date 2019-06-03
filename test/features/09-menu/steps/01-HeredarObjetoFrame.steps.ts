import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { menu, Menu } from "../Menu";
import { Frame } from "../../01-frame/Frame";

Given("Que Menu debe heredar de tipo Frame", function(){});

When("LLame al constructor de la clase Menu", function(){
    expect(menu.constructor.name).to.be.eq("Menu");
});

Then("La instancia creada debe ser de tipo Menu y Frame", function(){
    expect(menu).to.be.instanceOf(Menu).and.to.be.instanceOf(Frame);
});
