const { Shape, Triangle, Circle, Square } = require('./generateShapes');

function generateSVG(data) {
    console.log('Received data:', data);

    let svgContent = '';

    if (data.shape.includes('circle')) {
        const shape = new Circle(data.shape_color, data.text_color, data.text);
        shape.setColor(data.shape_color, data.text_color);
        return shape.render();
    }

    if (data.shape.includes('triangle')) {
        const shape = new Triangle(data.shape_color, data.text_color, data.text);
        shape.setColor(data.shape_color, data.text_color);
        return shape.render();
    }

    if (data.shape.includes('square')) {
        const shape = new Square(data.shape_color, data.text_color, data.text);
        shape.setColor(data.shape_color, data.text_color);
        return shape.render();
    }

    return svgContent;
}

module.exports = { generateSVG };
