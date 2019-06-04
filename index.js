function getFirstSelector(selector) {
  var result = document.querySelector(selector);
  console.log(result)
  return result;
}

function nestedTarget() {
return document.getElementById('nested').querySelector('div.target')
}
