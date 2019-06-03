import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { image } from "../Image";

Given("Que quiero establecer la imagen de un objeto Image", function(){});

When("LLame al método setSrc del objeto Image", function(){
    expect(image).respondsTo("setSrc");
});

Then("El objeto Image debe responder image setted", function(){
    expect(image.setSrc("default")).to.be.eq("image setted");
});
