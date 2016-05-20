var _ = require('underscore');
var GLMixin = require('./gl');

function GreaterPyson(desc) {
  GLMixin.call(this, desc);
}
_.inherit(GreaterPyson, GLMixin);
GreaterPyson.prototype.resolve = function (context) {
  return this.__.resolve.call(this, context, (l, r, e) => e ? l >= r : l > r);
};
//
// exports
module.exports = GreaterPyson;
