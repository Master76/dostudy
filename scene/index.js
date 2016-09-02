const home = require('./home.js'),
    credit = require('./credit.js'),
    clock = require('./clock.js');

var current = clock;

module.exports = {
    current : current,
    home: home,
    credit: credit
};