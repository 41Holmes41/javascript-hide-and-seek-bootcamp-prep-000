function getFirstSelector(selector) {
  var result = document.querySelector(selector);
  console.log(result)
  return result;
}

function nestedTarget('#nested .target'){
  var result = document.querySelector('#nested .target');
  return result;
}
