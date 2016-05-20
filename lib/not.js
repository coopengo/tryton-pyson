var _ = require('underscore');
var Pyson = require('./pyson');

function NotPyson(desc) {
  Pyson.call(this, desc);
  _.assert(_.isEmpty(_.without(Pyson.types(this.v), typeof false)), 'bad types');
}
_.inherit(NotPyson, Pyson);
NotPyson.prototype.types = function () {
  return [typeof false];
};
NotPyson.prototype.resolve = function (context) {
  return !Pyson.resolve(this.v, context);
};
//
// exports
module.exports = NotPyson;
