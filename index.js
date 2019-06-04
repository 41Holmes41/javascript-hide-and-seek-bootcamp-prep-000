function getFirstSelector(selector) {
  var result = document.querySelector(selector);
  console.log(result)
  return result;
}

function nestedTarget(number1, number2){
  var result = document.querySelectorALL(number1);
  var result2= result.querySelector(number2);
  return result2;
}
