import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { box, Box } from "../Box";
import { Frame } from "../../01-frame/Frame";

Given("Que Box debe heredar de tipo Frame", function(){});

When("LLame al constructor de la clase Box", function(){
    expect(box.constructor.name).to.be.eq("Box");
});

Then("La instancia creada debe ser de tipo Box y Frame", function(){
    expect(box).to.be.instanceOf(Box).and.to.be.instanceOf(Frame);
});
