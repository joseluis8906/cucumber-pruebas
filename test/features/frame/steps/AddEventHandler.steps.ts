import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero agregar manejadores de eventos a un objeto Frame", function(){});

When("LLame al método addEvent del objeto Frame", function(){
    expect(this).respondsTo("addEvent");
});

Then("El objecto Frame debe responder handler added", function(){
    expect(this.addEvent("click", () => {})).to.be.eq("handler added");
});
