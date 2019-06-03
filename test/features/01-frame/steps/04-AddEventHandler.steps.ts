import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";
 
Given("Que quiero agregar manejadores de eventos a un objeto Frame", function(){});

When("LLame al método addEvent del objeto Frame", function(){
    expect(frame).respondsTo("addEvent");
});

Then("El objecto Frame debe responder handler added", function(){
    expect(frame.addEvent("click", () => {})).to.be.eq("handler added");
});
