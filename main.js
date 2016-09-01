// imports
const Canvas = require('canvas'),
    Isomer = require('isomer'),
    fs = require('fs');

// alias
const Shape = Isomer.Shape;
const Point = Isomer.Point;
const Color = Isomer.Color;

module.exports = function (color1, color2, filePath) {

    var out = fs.createWriteStream(filePath);
    var canvas = new Canvas(400, 400);
    var iso = new Isomer(canvas);

    iso.add(Shape.Prism(Point.ORIGIN, 3, 3, 1));
    iso.add(Shape.Pyramid(Point(0, 2, 1)), color1);
    iso.add(Shape.Prism(Point(2, 0, 1)), color2);

    canvas.pngStream().pipe(out);

}