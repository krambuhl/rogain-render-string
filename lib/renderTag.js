import { createFrame, createDefaultLocals } from 'rogain-utils';

import renderTree from './renderTree';
import createAttributesObject from './createAttributesObject';
import renderAttributesObject from './renderAttributesObject';

export default function renderTag(tree, props, config) {
  var attrs = createAttributesObject(tree.attrs, props, config)
  var str = '';

  if (tree.className || attrs.class) {
    attrs.class = tree.className || attrs.class;
  }

  if (tree.attrMap) Object.assign(attrs, tree.attrMap);

  str += '<' + (tree.tagName || tree.name);
  str += renderAttributesObject(attrs);
  
  if (tree.children && tree.children.length > 0) {
    var frame = createFrame(tree.children, createDefaultLocals(tree, props));
    str += '>' + renderTree(frame, props, config);
    str += '</' + (tree.tagName || tree.name);
  } else {
    str += ' /';
  }

  return str + '>';
}