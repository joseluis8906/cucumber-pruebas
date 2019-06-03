import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame, frame } from "../Frame";
 
Given("Que quiero crear un objeto de tipo Frame", function(){});

When("LLame al constructor de la clase Frame", function(){
    expect(frame.constructor.name).to.be.eq("Frame");
});

Then("La instancia creada debe ser de tipo Frame", function(){
    expect(frame).to.be.instanceOf(Frame);
});
