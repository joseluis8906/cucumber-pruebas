import { Frame } from "../01-frame/Frame";

export class Menu extends Frame {
  public addItem(menu: object): string {
    return "item added"
  }
}

export const menu = new Menu();