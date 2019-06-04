function getFirstSelector(selector) {
  var result = document.querySelector(selector);
  console.log(result)
  return result;
}

function nestedTarget(selector1, selector2){
  var result = document.querySelectorAll(selector1).querySelector(selector2);
  return result;
}
