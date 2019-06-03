import { Given, When, Then } from "cucumber"
import { expect } from "chai"
import { box } from "../Box";

Given("Que quiero establcer la alineacion de los controles hijos del objeto Box", function(){});

When("LLame al método setAlignment de la clase Box", function(){
    expect(box).respondsTo("setAlignment");
});

Then("El objeto box debe responder alignment setted", function(){
    expect(box.setAlignment("middle")).to.be.eq("alignment setted");
});
