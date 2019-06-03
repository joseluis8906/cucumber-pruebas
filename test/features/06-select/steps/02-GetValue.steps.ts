import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { select, Select } from "../Select";
import { Frame } from "../../01-frame/Frame";

Given("Que quiero seleccionar una opcion de un objeto Select", function(){});

When("LLame al método getValue del objeto Select", function(){
    expect(select).respondsTo("getValue");
});

Then("El objeto Select debe responder el valor actual", function(){
    expect(select.getValue()).to.be.eq("value");
});
