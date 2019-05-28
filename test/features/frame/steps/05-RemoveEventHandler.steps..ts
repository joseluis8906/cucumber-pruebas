import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero eliminar manejadores de eventos de un objeto Frame", function(){});

When("LLame al método removeEvent del objeto Frame", function(){
    expect(this).respondsTo("removeEvent");
});

Then("El objecto Frame debe responder handler removed", function(){
    expect(this.removeEvent("click")).to.be.eq("handler removed");
});
