import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { multiline, Multiline } from "../Multiline";
import { InputText } from "../../04-inputText/InputText";

Given("Que Multiline debe heredar de tipo InputText", function(){});

When("LLame al constructor de la clase Multiline", function(){
    expect(multiline.constructor.name).to.be.eq("Multiline");
});

Then("La instancia creada debe ser de tipo Multiline y InputText", function(){
    expect(multiline).to.be.instanceOf(Multiline).and.to.be.instanceOf(InputText);
});
