var _ = require('underscore');
var moment = require('moment');
require('tryton-base')(_, moment);
var Pyson = require('./pyson');
//
var types = {
  'And': require('./and'),
  'Bool': require('./bool'),
  'Date': require('./date'),
  'Datetime': require('./datetime'),
  'Equal': require('./equal'),
  'Eval': require('./eval'),
  'Get': require('./get'),
  'Greater': require('./greater'),
  'If': require('./if'),
  'In': require('./in'),
  'Len': require('./len'),
  'Less': require('./less'),
  'Not': require('./not'),
  'Or': require('./or'),
};

function create(desc) {
  if (_.isObject(desc)) {
    desc = JSON.stringify(desc);
  }
  return JSON.parse(desc, (k, v) => {
    if (_.isObject(v) && v.__class__) {
      var type = v.__class__;
      delete v.__class__;
      var cls = types[type];
      _.assert(cls, 'unknown pyson __class__ ' + type);
      return new cls(v);
    }
    else {
      return v;
    }
  });
}
//
// exports
create.Pyson = Pyson;
module.exports = create;
