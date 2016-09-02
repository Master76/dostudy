var Base = require('./basescene'),
    util = require('util');

function Home() {
    this.name = 'home';
};

util.inherits(Home, Base);

module.exports = Home;
