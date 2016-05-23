var _ = require('underscore');
var Pyson = require('./pyson');

function GLMixin(desc) {
  Pyson.call(this, desc);
  _.assert(_.isEmpty(_.without(Pyson.types(this.s1), typeof 0)), 'bad types');
  _.assert(_.isEmpty(_.without(Pyson.types(this.s2), typeof 0)), 'bad types');
  _.assert(_.isEmpty(_.without(Pyson.types(this.e), typeof false)), 'bad types');
}
_.inherit(GLMixin, Pyson);
GLMixin.prototype.types = function () {
  return [typeof false];
};
GLMixin.prototype.resolve = function (context, cmpFn) {
  var s1 = Pyson.resolve(this.s1, context);
  var s2 = Pyson.resolve(this.s2, context);
  var e = Pyson.resolve(this.e, context);
  return cmpFn(s1, s2, e);
};
//
// exports
module.exports = GLMixin;
