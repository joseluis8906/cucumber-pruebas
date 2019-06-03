import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { box } from "../Box";

Given("Que quiero establcer margenes a controles hijos del objeto Box", function(){});

When("LLame al método setBorderWidth de la clase Box", function(){
    expect(box).respondsTo("setBorderWidth");
});

Then("El objeto box debe responder child margin setted", function(){
    expect(box.setBorderWidth(10)).to.be.eq("child margin setted");
});
