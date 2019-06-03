import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { select } from "../Select";

Given("Que quiero establecer un placeholder de un objeto Select", function(){});

When("LLame al método setPlaceholder del objeto Select", function(){
    expect(select).respondsTo("setPlaceholder");
});

Then("El objeto Select debe responder placeholder setted", function(){
    expect(select.setPlaceholder("default")).to.be.eq("placeholder setted");
});
