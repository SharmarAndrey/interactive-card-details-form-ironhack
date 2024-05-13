// Buena suerte!
// las variables de formulario
var holderName = document.querySelector("#holder-name");
/* holderName.setAttribute("required", true); */


var holderCardNumber = document.querySelector("#holder-card-number");

var expDate = document.querySelector("#exp-date");

var mmYy = document.querySelector("#mm-yy");

var cvc = document.querySelector("#cvc");


//las variables de imagen
var cardUsername = document.querySelector("#card-username");
var cardNumber = document.querySelector("#card-number");
var cardMonth = document.querySelector("#card-month");
var cardYear = document.querySelector("#card-year");
var cardCvc = document.querySelector("#card-cvc");



//logica para el campo  User name 
holderName.addEventListener('input', function () {
	cardUsername.textContent = holderName.value;

	console.log(cardUsername.textContent);
});

//logica para el campo  Card number 
holderCardNumber.addEventListener('input', function () {
	cardNumber.textContent = holderCardNumber.value;
});


//logica para el campo  expDate
expDate.addEventListener('input', function () {
	cardMonth.textContent = expDate.value;


});


//logica para el campo mmYy
mmYy.addEventListener('input', function () {
	cardYear.textContent = mmYy.value;


});

//logica para el campo  cvc
cvc.addEventListener('input', function () {
	cardCvc.textContent = cvc.value;


});



