import { InputText } from "../04-inputText/InputText";

export class Multiline extends InputText {
  public setMultiline(): string {
    return "multi line setted";
  }
}

export const multiline = new Multiline();
