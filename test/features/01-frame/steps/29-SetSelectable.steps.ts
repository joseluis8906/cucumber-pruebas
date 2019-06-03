import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer que un objeto Frame es seleccionable", function(){});

When("LLame al método setSelectable del objeto Frame", function(){
    expect(frame).respondsTo("setSelectable");
});

Then("El objecto Frame debe responder selectable setted", function(){
    expect(frame.setSelectable(true)).to.be.eq("selectable setted");
});
