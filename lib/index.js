import resolveTree from 'rogain-resolve-tree';
import renderTree from './renderTree';

export default function renderToString(tree, props, config) {
  var res = resolveTree(tree, props, config);
  return renderTree(res);
}
