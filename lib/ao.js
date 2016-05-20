var _ = require('underscore');
var Pyson = require('./pyson');

function AOMixin(desc) {
  Pyson.call(this, desc);
  _.assert(this.s.length >= 2, '<2 statements');
  _.each(this.s, (st) => {
    _.assert(_.isEmpty(_.without(Pyson.types(st), typeof false)),
      'bad type');
  });
}
_.inherit(AOMixin, Pyson);
AOMixin.prototype.types = function () {
  return [typeof false];
};
//
// exports
module.exports = AOMixin;
