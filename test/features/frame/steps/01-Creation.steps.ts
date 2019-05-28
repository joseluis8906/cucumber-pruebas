import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero crear un objeto de tipo Frame", function(){});

When("LLame al constructor de la clase Frame", function(){
    expect(this.constructor.name).to.be.eq("Frame");
});

Then("La instancia creada debe ser de tipo Frame", function(){
    expect(this).to.be.instanceOf(Frame);
});
