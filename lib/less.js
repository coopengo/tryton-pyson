var _ = require('underscore');
var GLMixin = require('./gl');

function LessPyson(desc) {
  GLMixin.call(this, desc);
}
_.inherit(LessPyson, GLMixin);
LessPyson.prototype.resolve = function (context) {
  return this.__.resolve.call(this, context, (l, r, e) => e ? l <= r : l < r);
};
//
// exports
module.exports = LessPyson;
