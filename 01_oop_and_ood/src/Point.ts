interface IPoint {
    x: number,
    y: number
}

export class Point implements IPoint {
    x: number;
    y: number;

    constructor();
    constructor(x: number, y: number);
    constructor(x?: number, y?: number) {
        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }

    toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    getCoordinates(): IPoint {
        return {
            x: this.x,
            y: this.y
        }
    }

    distance(): number;
    distance(x: number, y: number): number;
    distance(point: Point): number;
    distance(xOrPoint?: Point | number, y?: number): number {
        if (xOrPoint && typeof xOrPoint === 'number') {
            return Math.sqrt( (this.x - xOrPoint) ** 2 + (this.y - y) ** 2 );
        } else if (xOrPoint instanceof Point) {
            let coordinates = xOrPoint.getCoordinates();
            return Math.sqrt( (this.x - coordinates.x) ** 2 + (this.y - coordinates.y) ** 2 );
        } else {
            return Math.sqrt( this.x ** 2 + this.y ** 2 );
        }
    }
}
