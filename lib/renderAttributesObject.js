export default function renderAttributesObject(obj) {
  var str = '';
  var rejects = ['tagName'];

  for(var key in obj) {
    if (rejects.indexOf(key) === -1) {
      str += ' ' + key + '="' + obj[key] + '"';    
    }
  }
  
  return str;
}