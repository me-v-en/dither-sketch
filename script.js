import p5 from 'p5';
import './style.scss';
// import SimplexNoise from 'simplex-noise';

// const simplex = new SimplexNoise();

const points = [];
const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 360;
const COLUMN_COUNT = 64;
const ROW_COUNT = 36;



/*--------------------
INIT
--------------------*/
class Point {
    constructor(x, y, diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
    }

    draw(sketch) {
        sketch.ellipse(this.x, this.y, this.diameter);
    }
}

const s = (sketch) => {
    sketch.setup = () => {
        // set the canvas size
        sketch.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

        const pointHorGap = CANVAS_WIDTH / COLUMN_COUNT;
        const pointVertGap = CANVAS_HEIGHT / ROW_COUNT;

        for (let i = 0; i < COLUMN_COUNT; i++) {
            for (let j = 0; j < ROW_COUNT; j++) {
                const point = new Point((i + .5) * pointHorGap, (j + .5) * pointVertGap, 5);
                points.push(point);
            }
        }
        console.log(points);

    };

    sketch.draw = () => {
        sketch.background(255, 0, 0);
        points.forEach(point => {
            point.draw(sketch);
        })
    };
};

const canvas = new p5(s);
