import renderTag from './renderTag';

export default function renderTree(tree) {
  if (tree === undefined) return;

  if (Array.isArray(tree)) {
    return tree
      .map(child => renderTree(child))
      .join('');
  }

  if (typeof tree === 'object') {
    return renderTag(tree); 
  }

  return tree;
}