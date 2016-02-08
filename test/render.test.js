var start = +new Date();

const renderToString = require('../dist');
const html = require('html').prettyPrint;

const config = require('./render.config.js');
const data = require('./fixtures/data.json');

var output = renderToString(config.components.get('Template'), data, config);

console.log( html(output, { unformatted: [] }) );
console.log(`-- runtime: ${ +new Date() - start }ms`)
