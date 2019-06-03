import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer la alineacion vertical de un objeto Frame", function(){});

When("LLame al método setVAlign del objeto Frame", function(){
    expect(frame).respondsTo("setVAlign");
});

Then("El objecto Frame debe responder vertical align setted", function(){
    expect(frame.setVAlign("middle")).to.be.eq("vertical align setted");
});
