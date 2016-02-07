import { createFrame, createDefaultLocals } from 'rogain-utils';

import renderTree from './renderTree';
import createAttributesObject from './createAttributesObject';

export default function renderHelper(tree, props, config) {
  var attrs = createAttributesObject(tree.attrs, props, config);
  var copy = Object.assign({}, tree, { 
    data: attrs.data, 
    attrs: attrs
  });

  var result = config.helpers.get(tree.name).call(null, copy, props);
  var frame = createFrame(result, createDefaultLocals(copy, props));

  return renderTree(frame, props, config)
}