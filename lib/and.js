var _ = require('underscore');
var Pyson = require('./pyson');
var AOMixin = require('./ao');

function AndPyson(desc) {
  AOMixin.call(this, desc);
}
_.inherit(AndPyson, AOMixin);
AndPyson.prototype.resolve = function (context) {
  return !_.some(this.s, (st) => {
    return !Pyson.resolve(st, context);
  });
};
//
// exports
module.exports = AndPyson;
