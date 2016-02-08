export default function renderVariable(tree, props, config) {
  var obj = props;
  var path = tree.path;

  for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
    obj = obj[path[i]];
  }

  if (obj === undefined) return;

  if (Array.isArray(obj) || typeof obj === 'object') {
    return obj;
  } 

  return obj.toString();
}