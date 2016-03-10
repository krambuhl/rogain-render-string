var start = +new Date();

const renderToString = require('../dist');
const html = require('html').prettyPrint;

const config = require('./_config.js');
const data = require('./fixtures/data.js');

var output = renderToString(config.components.get('Test'), data, config);

console.log( html(output, { unformatted: [] }) );
console.log(`-- runtime: ${ +new Date() - start }ms`)
