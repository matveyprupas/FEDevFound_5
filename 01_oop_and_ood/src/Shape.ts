import { Point } from './Point'

export abstract class Shape {
    abstract getType(): string;

    protected color: string;
    protected filled: boolean;

    points: Array<Point>;

    constructor (points: Array<Point>);
    constructor (points: Array<Point>, color: string | undefined, filled: boolean | undefined);
    constructor (points: Array<Point>, color?: string, filled?: boolean) {
        if (points.length <= 2) throw "We need 3 and more points.";
        this.points = points;
        this.color = !!color ? color : 'green';
        this.filled = filled !== undefined ? filled : true;
    }

    toString(): string {
        let stringWithPoints: string = this.points.map( el => el.toString()).join(', ');
        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${stringWithPoints}.`;
    }

    getPerimeter(): number {
        let sum: number = 0;
    // [new Point(0, 0), new Point(0, 3), new Point(4, 3), new Point(4, 0)];

        for ( let i = 0; i < this.points.length; i++) {
            if (i === 0) {
                sum += this.points[i].distance(this.points[this.points.length - 1]); 
            } else {
                sum += this.points[i].distance(this.points[i-1]);
            }
        }

        return sum;
    }
}
