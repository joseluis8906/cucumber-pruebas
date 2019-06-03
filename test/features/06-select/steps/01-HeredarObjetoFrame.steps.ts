import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { select, Select } from "../Select";
import { Frame } from "../../01-frame/Frame";

Given("Que Select debe heredar de tipo Frame", function(){});

When("LLame al constructor de la clase Select", function(){
    expect(select.constructor.name).to.be.eq("Select");
});

Then("La instancia creada debe ser de tipo Select y Frame", function(){
    expect(select).to.be.instanceOf(Select).and.to.be.instanceOf(Frame);
});
