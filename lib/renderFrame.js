import renderTree from './renderTree';
export default function renderFrame(tree, props, config) {
  var locals = Object.assign({}, props, tree.locals);
  return renderTree(tree.children, locals, config);
}