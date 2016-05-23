var _ = require('underscore');
var Pyson = require('./pyson');

function InPyson(desc) {
  Pyson.call(this, desc);
  _.assert(_.isEmpty(_.without(Pyson.types(this.k), typeof 0, typeof '')),
    'bad types');
  _.assert(_.isEmpty(_.without(Pyson.types(this.v), typeof {}, typeof [])),
    'bad types');
}
_.inherit(InPyson, Pyson);
InPyson.prototype.types = function () {
  return [typeof false];
};
InPyson.prototype.resolve = function (context) {
  var v = Pyson.resolve(this.v, context);
  if (_.isArray(v)) {
    return _.contains(v, Pyson.resolve(this.k, context));
  }
  else if (_.isObject(v)) {
    return _.contains(_.keys(v), Pyson.resolve(this.k, context));
  }
  _.assert(false, 'bad types');
};
//
// exports
module.exports = InPyson;
