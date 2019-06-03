import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { multiline } from "../Multiline";

Given("Que quiero establecer escritura multi linea en el objecto Multiline", function(){});

When("LLame el metodo setMultiline del objeto Multiline", function(){
    expect(multiline).respondsTo("setMultiline");
});

Then("El objecto Multiline debe responder multi line setted", function(){
    expect(multiline.setMultiline()).to.be.eq("multi line setted");
});
