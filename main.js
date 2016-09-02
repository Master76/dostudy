// imports
var fs = require('fs'),
    scene = require('./scene');

module.exports = function (filePath) {

    // var start;
    // var end;
    // start = new Date();
    var out = fs.createWriteStream(filePath);
    // end = new Date();
    // timeElasped(start, end, 'create stream');

    // start = new Date();
    var current = scene.current;
    var instance = new current();
    // end = new Date();
    // timeElasped(start, end, 'create instance');

    // start = new Date();
    var canvas = instance.canvas;
    canvas.pngStream().pipe(out);
    // end = new Date();
    // timeElasped(start, end, 'write to stream');
}

// function timeElasped(start, end, name) {
//     var elasped = end - start;
//     console.log(name + ": " + elasped);
// }
