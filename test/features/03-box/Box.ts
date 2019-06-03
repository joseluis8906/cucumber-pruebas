import { Frame } from "../01-frame/Frame";


export class Box extends Frame {

    public setBorderWidth(margin: number): string {
      return "child margin setted";
    }

    public setAlignment(align: string): string {
      return "alignment setted";
    }
}

export const box = new Box();