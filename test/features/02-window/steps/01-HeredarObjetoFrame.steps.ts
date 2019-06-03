import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Window, window } from "../Window";
import { Frame } from "../../01-frame/Frame";

Given("Que Window debe heredar de tipo Frame", function(){});

When("LLame al constructor de la clase Window", function(){
    expect(window.constructor.name).to.be.eq("Window");
});

Then("La instancia creada debe ser de tipo Window y Frame", function(){
    expect(window).to.be.instanceOf(Window).and.to.be.instanceOf(Frame);
});
