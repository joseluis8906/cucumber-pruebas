import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero establecer que un objeto Frame es seleccionable", function(){});

When("LLame al método setSelectable del objeto Frame", function(){
    expect(this).respondsTo("setSelectable");
});

Then("El objecto Frame debe responder selectable setted", function(){
    expect(this.setSelectable(10)).to.be.eq("selectable setted");
});
