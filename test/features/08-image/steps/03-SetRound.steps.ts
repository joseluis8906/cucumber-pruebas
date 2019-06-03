import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { image } from "../Image";

Given("Que quiero establecer layout circular de un objeto Image", function(){});

When("LLame al método setRound del objeto Image", function(){
    expect(image).respondsTo("setRound");
});

Then("El objeto Image debe responder round layout setted", function(){
    expect(image.setRound()).to.be.eq("round layout setted");
});
