export default function renderAttributesObject(obj) {
  var str = '';

  for(var key in obj) {
    str += ' ' + key + '="' + obj[key] + '"';
  }
  
  return str;
}