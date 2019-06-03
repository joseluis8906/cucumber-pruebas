import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { frame } from "../Frame";

Given("Que quiero establecer la clase css de un objeto Frame", function(){});

When("LLame al método setClass del objeto Frame", function(){
    expect(frame).respondsTo("setClass");
});

Then("El objecto Frame debe responder class setted", function(){
    expect(frame.setClass("Frame")).to.be.eq("class setted");
});
