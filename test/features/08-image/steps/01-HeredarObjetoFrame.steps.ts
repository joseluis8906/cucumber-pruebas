import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { image, Image } from "../Image";
import { Frame } from "../../01-frame/Frame";

Given("Que Image debe heredar de tipo Frame", function(){});

When("LLame al constructor de la clase Image", function(){
    expect(image.constructor.name).to.be.eq("Image");
});

Then("La instancia creada debe ser de tipo Image y Frame", function(){
    expect(image).to.be.instanceOf(Image).and.to.be.instanceOf(Frame);
});
