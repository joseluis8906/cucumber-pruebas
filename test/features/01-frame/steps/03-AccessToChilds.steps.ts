import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero acceder a los controles de un objeto Frame", function(){});

When("LLame al método getChilds del objeto Frame", function(){
    expect(frame).respondsTo("getChilds");
});

Then("El objecto Frame debe responder con un array de objetos", function(){
    expect(frame.getChilds()).to.be.an("array");
});
