import { Frame } from "../01-frame/Frame";

export class Button extends Frame {
  public setIcon(icon: string): string {
    return "icon setted";
  }
}

export const button = new Button();
