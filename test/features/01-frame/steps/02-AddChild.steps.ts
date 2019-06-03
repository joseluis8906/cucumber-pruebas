import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";
 
Given("Que quiero agregar controles a objetos Frame", function(){});

When("LLame al método addChild del objeto Frame", function(){
    expect(frame).respondsTo("addChild");
});

Then("El objecto Frame debe responder child added", function(){
    expect(frame.addChild(new Object())).to.be.eq("child added");
});