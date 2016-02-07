import renderTree from './renderTree';
export default function renderBranch(children, props, config) {
  return children.map(child => renderTree(child, props, config)).join('');
}
