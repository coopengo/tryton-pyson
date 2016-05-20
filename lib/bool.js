var _ = require('underscore');
var Pyson = require('./pyson');

function BoolPyson(desc) {
  Pyson.call(this, desc);
}
_.inherit(BoolPyson, Pyson);
BoolPyson.prototype.types = function () {
  return [typeof false];
};
BoolPyson.prototype.resolve = function (context) {
  return !!Pyson.resolve(this.v, context);
};
//
// exports
module.exports = BoolPyson;
