var createFrame = require('rogain-utils').createFrame;
var createDefaultLocals = require('rogain-utils').createDefaultLocals;

module.exports = function(tree, props) {
  var locals = createDefaultLocals(tree, props);
  if (Array.isArray(tree.data)) {
    return tree.data.map((data, i) => {
      return createFrame(tree.children, Object.assign({}, locals, {
        '@loop': data,
        '@index': i
      }));
    });
  }
};
