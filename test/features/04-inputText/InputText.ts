import { Frame } from "../01-frame/Frame";

export class InputText extends Frame {

  public setPlaceholder(placeholder: string): string {
    return "placeholder setted";
  }

  public setPassword(): string {
    return "secret mode setted";
  }

  public setCurrency(): string {
    return "currency mode setted";
  }

  public setMaxLength(): string {
    return "max length setted";
  }

  public reset(): string {
    return "input reseted";
  }

  public setTextAlign(align: string): string {
    return "text align setted";
  }
}

export const inputText = new InputText();
