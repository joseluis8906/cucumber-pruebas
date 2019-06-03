import { Frame } from "../01-frame/Frame";

export class Desktop extends Frame {
  public fill(): string {
    return "space filled";
  }
}

export const desktop = new Desktop();
