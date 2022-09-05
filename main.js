let clr = document.getElementById("clr");
clr.addEventListener("click", clrFun);
function clrFun(event) {
  event.preventDefault();
  document.getElementById("results").value = "";
  results.focus();
}
let one = document.getElementById("one");
one.addEventListener("click", oneFun);
function oneFun(event) {
  event.preventDefault();
  document.getElementById("results").value += "1";
  results.focus();
}
let two = document.getElementById("two");
two.addEventListener("click", twoFun);
function twoFun(event) {
  event.preventDefault();
  document.getElementById("results").value += "2";
  results.focus();
}
let three = document.getElementById("three");
three.addEventListener("click", threeFun);
function threeFun(event) {
  event.preventDefault();
  document.getElementById("results").value += "3";
  results.focus();
}

let four = document.getElementById("four");
four.addEventListener("click", fourFun);
function fourFun(event) {
  event.preventDefault();
  document.getElementById("results").value += "4";
  results.focus();
}
let five = document.getElementById("five");
five.addEventListener("click", fiveFun);
function fiveFun(event) {
  event.preventDefault();
  document.getElementById("results").value += parseInt("5");
  results.focus();
}
let six = document.getElementById("six");
six.addEventListener("click", sixFun);
function sixFun(event) {
  event.preventDefault();
  document.getElementById("results").value += "6";
  results.focus();
}
let seven = document.getElementById("seven");
seven.addEventListener("click", sevenFun);
function sevenFun(event) {
  event.preventDefault();
  document.getElementById("results").value += "7";
  results.focus();
}
let eight = document.getElementById("eight");
eight.addEventListener("click", eightFun);
function eightFun(event) {
  event.preventDefault();
  document.getElementById("results").value += "8";
  results.focus();
}
let nine = document.getElementById("nine");
nine.addEventListener("click", nineFun);
function nineFun(event) {
  event.preventDefault();
  document.getElementById("results").value += "9";
  results.focus();
}
let zero = document.getElementById("zero");
zero.addEventListener("click", zeroFun);
function zeroFun(event) {
  event.preventDefault();
  document.getElementById("results").value += "0";
  results.focus();
}
let equal = document.getElementById("equal");
equal.addEventListener("click", equalFun);
function equalFun(event) {
  event.preventDefault();
  let abcd = document.getElementById("results").value;
  let defg = eval(abcd);
  document.getElementById("results").value = defg;
  results.focus();
}
let dot = document.getElementById("dot");
dot.addEventListener("click", dotFun);
function dotFun(event) {
  event.preventDefault();
  document.getElementById("results").value += ".";
  results.focus();
}
let addition = document.getElementById("addition");
addition.addEventListener("click", additionFun);
function additionFun(event) {
  event.preventDefault();
  document.getElementById("results").value += "+";
  results.focus();
}
let minus = document.getElementById("minus");
minus.addEventListener("click", minusFun);
function minusFun(event) {
  event.preventDefault();
  document.getElementById("results").value += "-";
  results.focus();
}
let multiply = document.getElementById("multiply");
multiply.addEventListener("click", multiplyFun);
function multiplyFun(event) {
  event.preventDefault();
  document.getElementById("results").value += "*";
  results.focus();
}
let division = document.getElementById("division");
division.addEventListener("click", divisionFun);
function divisionFun(event) {
  event.preventDefault();
  document.getElementById("results").value += "/";
  results.focus();
}
let percentage = document.getElementById("percentage");
percentage.addEventListener("click", percentageFun);
function percentageFun(event) {
  event.preventDefault();
  document.getElementById("results").value += "%";
  results.focus();
}
let rightBracket = document.getElementById("rightBracket");
rightBracket.addEventListener("click", rightBracketFun);
function rightBracketFun(event) {
  event.preventDefault();
  document.getElementById("results").value += ")";
  results.focus();
}
let leftBracket = document.getElementById("leftBracket");
leftBracket.addEventListener("click", leftBracketFun);
function leftBracketFun(event) {
  event.preventDefault();
  document.getElementById("results").value += "(";
  results.focus();
}
