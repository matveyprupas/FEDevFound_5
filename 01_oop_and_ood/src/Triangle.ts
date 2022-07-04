import { Shape } from './Shape';
import { Point } from './Point';

export class Triangle extends Shape {
    points: Array<Point>;

    constructor (point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
        let points: Array<Point> = [point1, point2, point3];
        super (points, color, filled);
    }

    getType(): string {
        let sidesArr: Set<number> = new Set();

        for ( let i = 0; i < this.points.length; i++) {
            if (i === 0) {
                sidesArr.add( (this.points[i].distance(this.points[this.points.length - 1])) );
            } else {
                sidesArr.add( (this.points[i].distance(this.points[i-1])) );
            }
        }

        return sidesArr.size === 1 ? "equilateral triangle" : 
               sidesArr.size === 2 ? "isosceles triangle" : "scalene triangle";
    }

    toString(): string {
        let stringWithPoints: string = this.points.map( (el, i) => (`v${i+1}=${el.toString()}`) ).join(',');
        return `Triangle[${stringWithPoints}]`;
    }
}
