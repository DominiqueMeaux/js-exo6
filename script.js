//déclaration de la fonction 
function diviser(){
var firstNumber = document.getElementById('firstNumber').value;
var secondNumber = document.getElementById('secondNumber').value;
var regex = /^[.]?[0-9]+$/;
if((regex.test(firstNumber) == true) && (regex.test(secondNumber) == true) ){
  //% modulo, permet d afficher le reste d une division
  var result = firstNumber % secondNumber;
  alert(result)
}
else{
  alert('Entrez des nombres');
  }
}
