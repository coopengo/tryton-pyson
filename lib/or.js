var _ = require('underscore');
var Pyson = require('./pyson');
var AOMixin = require('./ao');

function OrPyson(desc) {
  AOMixin.call(this, desc);
}
_.inherit(OrPyson, AOMixin);
OrPyson.prototype.resolve = function (context) {
  return _.some(this.s, (st) => {
    return Pyson.resolve(st, context);
  });
};
//
// exports
module.exports = OrPyson;
