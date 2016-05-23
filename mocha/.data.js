var _ = require('underscore');
var moment = require('moment');
// WARNING : Moment starts months at 0, and milliseconds are expected to be < 1
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
    M: 2,
    d: 10
  },
  c: null,
  r: _.date({
    y: 2016,
    M: 2,
    d: 10
  })
}, {
  p: {
    __class__: 'Date'
  },
  c: null,
  r: _.date({
    y: moment()
      .year(),
    M: moment()
      .month(),
    d: moment()
      .date()
  })
}, {
  p: {
    __class__: 'Date',
    y: 2015
  },
  c: null,
  r: _.date({
    y: 2015,
    M: moment()
      .month(),
    d: moment()
      .date()
  })
}, {
  p: {
    __class__: 'Date',
    dy: 4
  },
  c: null,
  r: _.date({
    y: moment()
      .year() + 4,
    M: moment()
      .month(),
    d: moment()
      .date()
  })
}];
exports.datetime = [{
  p: {
    __class__: 'Datetime',
    y: 2016,
    M: 3,
    d: 10,
    h: 11,
    m: 26,
    s: 15,
    ms: 0.421
  },
  c: null,
  r: _.datetime({
    y: 2016,
    M: 3,
    d: 10,
    h: 11,
    m: 26,
    s: 15,
    ms: 0.421
  })
}, {
  p: {
    __class__: 'Datetime',
    ms: 0.121
  },
  c: null,
  r: _.datetime({
    y: moment()
      .year(),
    M: moment()
      .month(),
    d: moment()
      .date(),
    h: moment()
      .hour(),
    m: moment()
      .minute(),
    s: moment()
      .second(),
    ms: 0.121
  })
}, {
  p: {
    __class__: 'Datetime',
    y: 2015,
    h: 6,
    ms: 0.420
  },
  c: null,
  r: _.datetime({
    y: 2015,
    M: moment()
      .month(),
    d: moment()
      .date(),
    h: 6,
    m: moment()
      .minute(),
    s: moment()
      .second(),
    ms: 0.420
  })
}];
exports.equalpyson = [{
  p: {
    __class__: 'Equal',
    s1: true,
    s2: false
  },
  c: null,
  r: false
}, {
  p: {
    __class__: 'Equal',
    s1: true,
    s2: true
  },
  c: null,
  r: true
}, {
  p: {
    __class__: 'Equal',
    s1: 10,
    s2: 0
  },
  c: null,
  r: false
}, {
  p: {
    __class__: 'Equal',
    s1: 11,
    s2: 11
  },
  c: null,
  r: true
}, {
  p: {
    __class__: 'Equal',
    s1: _.date(2015, 4, 10),
    s2: false
  },
  c: null,
  r: Error
}, {
  p: {
    __class__: 'Equal',
    s1: _.date(2015, 4, 10),
    s2: _.date(2015, 3, 11)
  },
  c: null,
  r: false
}, {
  p: {
    __class__: 'Equal',
    s1: _.date(2015, 4, 10),
    s2: _.date(2015, 4, 10)
  },
  c: null,
  r: true
}, {
  p: {
    __class__: 'Equal',
    s1: 'foo',
    s2: 'bar'
  },
  c: null,
  r: false
}, {
  p: {
    __class__: 'Equal',
    s1: 'foo',
    s2: 'foo'
  },
  c: null,
  r: true
}];

exports.evalpyson = [{
    p: {
      __class__: 'Eval',
      v: 'foo',
      d: 'bar'
    },
    c: null,
    r: 'bar'
    }, {
    p: {
      __class__: 'Eval',
      v: 'foo',
      d: 'bar'
    },
    c: {foo: 'honey'},
    r: 'honey'
    }, {
    p: {
      __class__: 'Eval',
      v: 'foo',
      d: 0
    },
    c: {foo: 10},
    r: 10
    }, {
    p: {
      __class__: 'Eval',
      v: 'foo',
      d: 'bar'
    },
    c: {'honey': 'ham'},
    r: 'bar'
    }];
exports.getpyson = [{
  p: {
    __class__: 'Get',
    v: {},
    k: 'foo',
    d: 10
  },
  c: null,
  r: 10
}, {
  p: {
    __class__: 'Get',
    v: {'foo': 10},
    k: 'foo',
    d: 30
  },
  c: null,
  r: 10
}, {
  p: {
    __class__: 'Get',
    v: {'foo': 10},
    k: 'bar',
    d: 30
  },
  c: null,
  r: 30
}];
exports.greater = [{
  p: {
    __class__: 'Greater',
    s1: 10,
    s2: 20,
    e: false
  },
  c: null,
  r: false
}, {
  p: {
    __class__: 'Greater',
    s1: 20,
    s2: 10,
    e: false
  },
  c: null,
  r: true
}, {
  p: {
    __class__: 'Greater',
    s1: 10,
    s2: 10,
    e: false
  },
  c: null,
  r: false
}, {
  p: {
    __class__: 'Greater',
    s1: 10,
    s2: 10,
    e: true
  },
  c: null,
  r: true
}];
exports.ifpyson = [{
  p: {
    __class__: 'If',
    c: true,
    t: 'foo',
    e: 'bar'
  },
  c: null,
  r: 'foo'
}, {
  p: {
    __class__: 'If',
    c: false,
    t: 'foo',
    e: 'bar'
  },
  c: null,
  r: 'bar'
}, {
  p: {
    __class__: 'If',
    c: 10,
    t: 'foo',
    e: 'bar'
  },
  c: null,
  r: Error
}, {
  p: {
    __class__: 'If',
    c: true,
    t: 'foo',
    e: 10
  },
  c: null,
  r: Error
}];
exports.inpyson = [{
  p: {
    __class__: 'In',
    v: 10,
    k: 'foo'
  },
  c: null,
  r: Error
}, {
  p: {
    __class__: 'In',
    v: [1, 2],
    k: 'foo'
  },
  c: null,
  r: false
}, {
  p: {
    __class__: 'In',
    v: [1, 2, 'foo'],
    k: 'foo'
  },
  c: null,
  r: true
}, {
  p: {
    __class__: 'In',
    v: {a: 1, b: 2},
    k: 'foo'
  },
  c: null,
  r: false
}, {
  p: {
    __class__: 'In',
    v: {a: 1, b: 2, foo: 10},
    k: 'foo'
  },
  c: null,
  r: true
}];
exports.lenpyson = [{
  p: {
    __class__: 'Len',
    v: 10
  },
  c: null,
  r: Error
}, {
  p: {
    __class__: 'Len',
    v: [1, 2, 3]
  },
  c: null,
  r: 3
}, {
  p: {
    __class__: 'Len',
    v: '123'
  },
  c: null,
  r: 3
}, {
  p: {
    __class__: 'Len',
    v: {a: 1, b: 2, c: 3}
  },
  c: null,
  r: 3
}];
exports.lesspyson = [{
  p: {
    __class__: 'Less',
    s1: 10,
    s2: 20,
    e: false
  },
  c: null,
  r: true
}, {
  p: {
    __class__: 'Less',
    s1: 20,
    s2: 10,
    e: false
  },
  c: null,
  r: false
}, {
  p: {
    __class__: 'Less',
    s1: 10,
    s2: 10,
    e: false
  },
  c: null,
  r: false
}, {
  p: {
    __class__: 'Less',
    s1: 10,
    s2: 10,
    e: true
  },
  c: null,
  r: true
}];
exports.notpyson = [{
  p: {
    __class__: 'Not',
    v: 10
  },
  c: null,
  r: Error
}, {
  p: {
    __class__: 'Not',
    v: false
  },
  c: null,
  r: true
}, {
  p: {
    __class__: 'Not',
    v: true
  },
  c: null,
  r: false
}];
exports.orpyson = [{
  p: {
    __class__: 'Or',
    s: [1, 2, 3]
  },
  c: null,
  r: Error
}, {
  p: {
    __class__: 'Or',
    s: [false]
  },
  c: null,
  r: Error
}, {
  p: {
    __class__: 'Or',
    s: [true, false]
  },
  c: null,
  r: true
}, {
  p: {
    __class__: 'Or',
    s: [false, false]
  },
  c: null,
  r: false
}, {
  p: {
    __class__: 'Or',
    s: [true, true]
  },
  c: null,
  r: true
}];

var composite = {
    __class__: 'If',
    c: {
      __class__: 'Equal',
      s1: {
        __class__: 'Eval',
        v: 'foo',
        d: 0
      },
      s2: {
        __class__: 'Len',
        v: {
          __class__: 'Eval',
          v: 'bar',
          d: [1, 2]
        }
      }
    },
    t: {
      __class__: 'Date',
      dy: 4
    },
    e: {
      __class__: 'If',
      c: {
        __class__: 'Greater',
        s1: 10,
        s2: {
          __class__: 'Eval',
          v: 'ham',
          d: 4
        },
        e: false
      },
      t: {
        __class__: 'Date'
      },
      e: {
        __class__: 'Date',
        dy: 8
      }
    }
  };
exports.composite = [{
  p: composite,
  c: {
    foo: 2
  },
  r: _.date({
    y: moment()
      .year() + 4,
    M: moment()
      .month(),
    d: moment()
      .date()
    })
  }, {
  p: composite,
  c: {
    foo: 2,
    bar: [1]
  },
  r: _.date({
    y: moment()
      .year(),
    M: moment()
      .month(),
    d: moment()
      .date()
    })
  }, {
  p: composite,
  c: {
    foo: 2,
    bar: [1],
    ham: 12
  },
  r: _.date({
    y: moment()
      .year() + 8,
    M: moment()
      .month(),
    d: moment()
      .date()
    })
}];
