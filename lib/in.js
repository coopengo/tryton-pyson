var _ = require('underscore');
var Pyson = require('./pyson');

function InPyson(desc) {
  Pyson.call(this, desc);
  _.assert(_.isEmpty(_.without(Pyson.types(this.k), typeof 0, typeof '')),
    'bad types');
  _.assert(_.isEmpty(_.without(Pyson.types(this.v), typeof {})), 'bad types');
}
_.inherit(InPyson, Pyson);
InPyson.prototype.types = function () {
  return [typeof false];
};
InPyson.prototype.resolve = function (context) {
  return _.contains(Pyson.resolve(this.v, context), Pyson.resolve(this.k,
    context));
};
//
// exports
module.exports = InPyson;
