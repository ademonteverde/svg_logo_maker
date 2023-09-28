const { Shape, Triangle, Circle, Square } = require('./generateShapes');

describe('Shape Classes', () => {
    test('Shape should initialize correctly', () => {
        const shape = new Shape('red', 'blue', 'Hello');
        expect(shape.shapeColor).toBe('red');
        expect(shape.textColor).toBe('blue');
        expect(shape.text).toBe('Hello');
    });

    test('Triangle should render correctly', () => {
        const triangle = new Triangle('red', 'blue', 'Triangle');
        const svgContent = triangle.render();
    });

    test('Circle should render correctly', () => {
        const circle = new Circle('green', 'yellow', 'Circle');
        const svgContent = circle.render();
    });

    test('Square should render correctly', () => {
        const square = new Square('orange', 'purple', 'Square');
        const svgContent = square.render();
    });
});
