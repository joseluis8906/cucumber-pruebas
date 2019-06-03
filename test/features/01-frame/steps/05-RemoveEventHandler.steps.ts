import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";
 
Given("Que quiero eliminar manejadores de eventos de un objeto Frame", function(){});

When("LLame al método removeEvent del objeto Frame", function(){
    expect(frame).respondsTo("removeEvent");
});

Then("El objecto Frame debe responder handler removed", function(){
    expect(frame.removeEvent("click")).to.be.eq("handler removed");
});
