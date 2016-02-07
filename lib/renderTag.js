import { createFrame, createDefaultLocals } from 'rogain-utils';

import renderTree from './renderTree';
import createAttributesObject from './createAttributesObject';
import renderAttributesObject from './renderAttributesObject';

export default function renderTag(tree, props, config) {
  var attrs = createAttributesObject(tree.attrs, props, config)
  var str = '';

  str += '<' + tree.tagName;
  str += renderAttributesObject(attrs);
  
  if (tree.children && tree.children.length > 0) {
    var frame = createFrame(tree.children, createDefaultLocals(tree, props));
    str += '>' + renderTree(frame, props, config);
    str += '</' + tree.tagName;
  }

  return str + '>';
}