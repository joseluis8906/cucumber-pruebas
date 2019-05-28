import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero agregar controles a objetos Frame", function(){});

When("LLame al método addChild del objeto Frame", function(){
    expect(this).respondsTo("addChild");
});

Then("El objecto Frame debe responder child added", function(){
    expect(this.addChild(new Object())).to.be.eq("child added");
});