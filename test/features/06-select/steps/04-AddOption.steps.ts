import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { select } from "../Select";

Given("Que quiero establecer opciones a un objeto Select", function(){});

When("LLame al método addOption del objeto Select", function(){
    expect(select).respondsTo("addOption");
});

Then("El objeto Select debe responder option added", function(){
    expect(select.addOption({})).to.be.eq("option added");
});
