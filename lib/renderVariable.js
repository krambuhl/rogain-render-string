export default function renderVariable(tree, props, config) {
  var obj = props;
  var path = tree.path;

  for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
    obj = obj[path[i]];
  }

  return Array.isArray(obj) ? obj : obj !== undefined ? obj.toString() : undefined;
}