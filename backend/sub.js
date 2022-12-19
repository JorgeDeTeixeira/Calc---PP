// var sub = function(a,b){
//     return a-b
// }

// module.exports = sub;

function Subtrair() {
  var num1 = Number(document.querySelector("input#num1").value);
  var num2 = Number(document.querySelector("input#num2").value);
  var resul = document.querySelector("div#resul");

  var result = num1 - num2;
  resul.innerHTML = `A subtração entre ${num1} e ${num2} é igual a ${result}`;
}
