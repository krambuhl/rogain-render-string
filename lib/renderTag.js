import renderTree from './renderTree';
import renderAttributesObject from './renderAttributesObject';

// https://www.w3.org/TR/html5/syntax.html#void-elements
var voidElements = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
];

export default function renderTag(tree) {
  var str = '';

  str += '<' + tree.name;
  str += renderAttributesObject(tree.attrs);
  
  if (tree.children && tree.children.length > 0) {
    str += '>' + renderTree(tree.children);
    str += '</' + tree.name;
  } else if (voidElements.indexOf(tree.name) != -1) {
    str += ' /';
  } else {
    str += '></' + tree.name;
  }

  return str + '>';
}
