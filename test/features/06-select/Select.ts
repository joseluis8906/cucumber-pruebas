import { Frame } from "../01-frame/Frame";

export class Select extends Frame {
  public getValue(): string {
    return "value";
  }

  public setPlaceholder(placeholder: string): string {
    return "placeholder setted";
  }

  public addOption(option: object): string {
    return "option added";
  }
}

export const select = new Select();
