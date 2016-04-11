const resolveTree = require('rogain-resolve-tree');
const cheerio = require('cheerio');
const test = require('tape');

const renderToString = require('../dist');
const config = require('./_config');

const data = require('./fixtures/data.js');

test('renderToString', function(t, d) {
  var res = resolveTree(config.components.get('Test'), data, config);
  var html = renderToString(res);

  var $ = cheerio.load(html);
  var $root = $.root().children();

  t.plan(34);
  
  t.equal($root[0].name, 'div');

  t.equal($root[0].children[0].name, 'section');
  t.equal($root[0].children[0].attribs.class, 'block');
  t.equal($root[0].children[0].attribs['data-hex'], '#f00');
  t.equal($root[0].children[0].children[0].data, 'red');

  t.equal($root[0].children[1].name, 'div');
  t.equal($root[0].children[1].attribs.class, 'component box');
  t.equal($root[0].children[1].attribs.id, 'colors');
 
  t.equal($root[0].children[1].children[0].name, 'div');
  t.equal($root[0].children[1].children[0].attribs.class, 'block');
  t.equal($root[0].children[1].children[0].attribs['data-hex'], '#00f')
  t.equal($root[0].children[1].children[0].children[0].data, 'blue');
 
  t.equal($root[0].children[1].children[1].name, 'a');
  t.equal($root[0].children[1].children[1].attribs.href, '/colors');
  t.equal($root[0].children[1].children[1].children[0].data, 'Read More');

  t.equal($root[0].children[2].name, 'div');
  t.equal($root[0].children[2].attribs.class, 'block');
  t.equal($root[0].children[2].attribs['data-hex'], '#f00');
  t.equal($root[0].children[2].children[0].data, 'red0');

  t.equal($root[0].children[3].name, 'a');
  t.equal($root[0].children[3].attribs.href, '/colors/red');
  t.equal($root[0].children[3].children[0].data, 'Read More');

  t.equal($root[0].children[4].name, 'div');
  t.equal($root[0].children[4].attribs.class, 'block');
  t.equal($root[0].children[4].attribs['data-hex'], '#00f');
  t.equal($root[0].children[4].children[0].data, 'blue1');

  t.equal($root[0].children[5].name, 'a');
  t.equal($root[0].children[5].attribs.href, '/colors/blue');
  t.equal($root[0].children[5].children[0].data, 'Read More');

  t.equal($root[0].children[6].name, 'script');
  t.equal($root[0].children[6].attribs.src, '/scripts/main.js');
  t.equal($root[0].children[6].children[0].data, 'function hello(str) { }');

  t.equal($root[0].children[7].name, 'img');
  t.equal($root[0].children[7].attribs.src, '/scripts/main.js');
});
