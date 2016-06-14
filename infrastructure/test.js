var base = require('./base');
var _ = require('lodash');

var test = {
    name: 'super-book-inventory-test'
};

base.configurator(_.merge({}, base.config, test));