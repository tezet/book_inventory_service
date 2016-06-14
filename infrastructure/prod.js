var base = require('./base');
var _ = require('lodash');

var prod = {
    name: 'super-book-inventory-prod'
};

base.configurator(_.merge({}, base.config, prod));