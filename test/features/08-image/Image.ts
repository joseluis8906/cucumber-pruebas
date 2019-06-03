import { Frame } from "../01-frame/Frame";

export class Image extends Frame {
  public setSrc(image: string): string {
    return "image setted";
  }

  public setRound(): string {
    return "round layout setted";
  }
}

export const image = new Image();
