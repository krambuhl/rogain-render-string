import renderTree from './renderTree';

export default function createAttributesObject(attrs, props, config) {
  var obj = {};
  for(var a in attrs) {
    let attr = attrs[a];
    let key = attr.name;
    let value = attr.value;

    if (Array.isArray(attr.name)) key = renderTree(attr.name, props, config);
    if (attr.data) {
      if (attr.name == 'data' && attr.data.length === 1 && attr.data[0].type === 'variable') {
        value = renderTree(attr.data[0], props, config);
      } else {
        value = renderTree(attr.data, props, config);
      }
    }


    obj[key] = value;
  }
  return obj;
}