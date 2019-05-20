import { setWorldConstructor, Given, When, Then } from "cucumber"
import { expect } from "chai"
import { Frame } from "../Frame";

setWorldConstructor(Frame);
 
Given("Que quiero acceder a los controles de un objeto Frame", function(){});

When("LLame al método getChilds del objeto Frame", function(){
    expect(this).respondsTo("getChilds");
});

Then("El objecto Frame debe responder con un array de objetos", function(){
    expect(this.getChilds()).to.be.an("array");
});
