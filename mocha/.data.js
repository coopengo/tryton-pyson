var _ = require('underscore');
var moment = require('moment');

exports.eval = [{
  p: {
    __class__: 'Eval',
    v: 'value',
    d: true
  },
  c: {
    value: false
  },
  r: false
}, {
  p: {
    __class__: 'Eval',
    v: 'value',
    d: true
  },
  c: null,
  r: true
}, {
  p: {
    __class__: 'Eval',
    v: 'value',
    d: true
  },
  c: {
    value: 'string'
  },
  r: Error
}];

exports.and = [{
  p: {
    __class__: 'And',
    s: [true, true, false]
  },
  c: null,
  r: false
}, {
  p: {
    __class__: 'And',
    s: [true, true, true]
  },
  c: null,
  r: true
}, {
  p: {
    __class__: 'And',
    s: [true, 1]
  },
  c: null,
  r: Error
}];

exports.bool = [{
    p: {
      __class__: 'Bool',
      v: false
    },
    c: null,
    r: false
    }, {
    p: {
      __class__: 'Bool',
      v: true
    },
    c: null,
    r: true
    }];

exports.date = [{
    p: {
      __class__: 'Date',
      y: 2016,
      M: 3,
      d: 10
    },
    c: null,
    r: _.date({y: 2016, M: 3, d:10})
    }, {
    p: {
      __class__: 'Date'
    },
    c: null,
    r: _.date({y: moment().y, M: moment().M, d: moment().d})
    }, {
    p: {
      __class__: 'Date',
      y: 2015
    },
    c: null,
    r: _.date({y: 2015, M: moment().M, d: moment().d})
    }];
