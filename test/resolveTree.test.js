var config = require('./_config');
var test = require('tape');
var renderToString = require('../dist');

const data = require('./fixtures/data.js');

test('renderToString', function(t, d) {
  var res = renderToString(config.components.get('Test'), data, config);

  console.log(res);

  t.plan(1);
  t.equal(true, true);
});
