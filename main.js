// imports
var fs = require('fs'),
    scene = require('./scene');

module.exports = function (filePath) {

    var out = fs.createWriteStream(filePath);
    var current = scene.current;
    var instance = new current();
    var canvas = instance.canvas;

    canvas.pngStream().pipe(out);

}