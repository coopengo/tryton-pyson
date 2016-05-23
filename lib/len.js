var _ = require('underscore');
var Pyson = require('./pyson');

function LenPyson(desc) {
  Pyson.call(this, desc);
  _.assert(_.isEmpty(_.without(Pyson.types(this.v), typeof '', typeof {},
    typeof [])), 'bad types');
}
_.inherit(LenPyson, Pyson);
LenPyson.prototype.types = function () {
  return [typeof 0];
};
LenPyson.prototype.resolve = function (context) {
  return _.size(Pyson.resolve(this.v, context));
};
//
// exports
module.exports = LenPyson;
