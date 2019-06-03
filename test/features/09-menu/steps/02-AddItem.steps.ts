import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { menu, Menu } from "../Menu";
import { Frame } from "../../01-frame/Frame";

Given("Que quiero agregar items al objeto tipo Menu", function(){});

When("LLame al método addItem de la clase Menu", function(){
    expect(menu).respondsTo("addItem");
});

Then("El objeto Menu debe responder item added", function(){
    expect(menu.addItem({})).to.be.eq("item added");
});
