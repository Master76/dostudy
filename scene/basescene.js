module.exports = BaseScene;

var Canvas = require('canvas'),
    settings = require('../config/settings.js').scene;

function BaseScene() {
   this.name = 'base';
};

BaseScene.prototype.canvas = new Canvas(settings.width, settings.height);;

BaseScene.prototype.showName = function() {
    console.log(this.name);
};
