import { createFrame, createDefaultLocals } from 'rogain-utils';

import renderTree from './renderTree';
import createAttributesObject from './createAttributesObject';
import renderAttributesObject from './renderAttributesObject';

export default function renderComponent(tree, props, config) {
  var component = config.components.get(tree.name);
  var cattrs = createAttributesObject(component.attrs, props, config)
  var attrs = createAttributesObject(tree.attrs, props, config)
  var tagName = attrs.tagName || component.tagName;
  var str = '';

  // concat classes
  attrs.class = cattrs.class + ' ' + attrs.class;

  str += '<' + tagName;
  str += renderAttributesObject(attrs);

  if (tree.children && tree.children.length > 0) {
    var frame = createFrame(tree.children, createDefaultLocals(tree, props));
    str += '>' + renderTree(frame, props, config);
    str += '</' + tagName;    
  }

  return str + '>';
}