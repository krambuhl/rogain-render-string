const resolveTree = require('rogain-resolve-tree');
const html = require('html').prettyPrint;

const renderToString = require('../dist');
const config = require('./_config.js');
const data = require('./fixtures/data.js');

const Test = config.components.get('Test');

var start = +new Date();
var resolvedTree = resolveTree(Test, data, config);
var output = renderToString(resolvedTree);
console.log(`-- runtime: ${ +new Date() - start }ms`)

console.log( html(output, { unformatted: [] }) );
