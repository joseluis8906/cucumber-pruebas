export class Frame {

    public addChild(child: any): string {
        return "child added";
    }

    public getChilds(): Array<Object> {
        return [{},{},{}];
    }

    public addEvent(event: string, cb: Function): string {
        return "handler added";
    }

    public removeEvent(event: string): string {
        return "handler removed";
    }

    public setHtml(html: string): string {
        return "html setted";
    }

    public setZIndex(zIndex: number): string {
        return "z-index setted";
    }

    public setSize(width: number, height: number): string {
        return "dimension setted";
    }
}