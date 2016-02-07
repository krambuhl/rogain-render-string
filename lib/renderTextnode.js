import renderTree from './renderTree';
export default function renderTextnode(tree, props, config) {
  if (tree.value) return tree.value;
  return renderTree(tree.data, props, config);
}