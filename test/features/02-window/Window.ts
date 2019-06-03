import { Frame } from "../01-frame/Frame";

export class Window extends Frame {
  public open(): string {
    return "opened";
  }

  public close(): string {
    return "closed";
  }

  public enableMenu(): string {
    return "menu enabled";
  }

  public enableTitleBar(): string {
    return "title bar enabled";
  }

  public setLayout(): string {
    return "layout setted";
  }
}

export const window = new Window();