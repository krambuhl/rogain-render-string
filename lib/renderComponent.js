import { createFrame, createDefaultLocals } from 'rogain-utils';

import renderTree from './renderTree';
import createAttributesObject from './createAttributesObject';
import renderAttributesObject from './renderAttributesObject';

export default function renderComponent(tree, props, config) {
  var component = config.components.get(tree.name);
  var locals = createDefaultLocals(tree, props);
  
  var cattrs = createAttributesObject(component.attrs, props, config)
  var attrs = createAttributesObject(tree.attrs, props, config)
  var allAttrs = Object.assign({}, attrs, cattrs);
  
  var className = [];

  if (cattrs.class) className.push(cattrs.class);
  if (attrs.class) className.push(attrs.class);

  allAttrs.class = component.className = className.join(' ');
  allAttrs.classList = component.classList = component.className.split(' ');

  component.attrMap = {};

  for (var attr in allAttrs) {
    if (attr.indexOf('aria-') !== -1 || attr.indexOf('data-') !== -1) {
      component.attrMap[attr] = allAttrs[attr];
    }
  }

  locals['@children'] = tree.children;
  locals['@attrs'] = Object.assign({}, allAttrs, props['@attrs']);

  if (attrs.tagName) component.tagName = attrs.tagName

  var frame = createFrame(component, locals);
  return renderTree(frame, props, config);
}