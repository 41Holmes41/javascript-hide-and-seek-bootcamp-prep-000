function getFirstSelector(selector) {
  var result = document.querySelector(selector);
  console.log(result)
  return result;
}

function nestedTarget(number1, number2){
  var result = document.querySelector(number1).querySelector(number2);
  return result;
}
