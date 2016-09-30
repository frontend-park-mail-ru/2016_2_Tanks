var Q = require("q");
var deep = require('deep-aplus')(Q.Promise);

module.exports = function(value) {
    return deep(value);
};