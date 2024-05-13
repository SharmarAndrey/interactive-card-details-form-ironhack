// Buena suerte!
// las variables de formulario
const holderName = document.querySelector("#holder-name");
/* holderName.setAttribute("required", true); */


const holderCardNumber = document.querySelector("#holder-card-number");

const expDate = document.querySelector("#exp-date");

const mmYy = document.querySelector("#mm-yy");

const cvc = document.querySelector("#cvc");


//las variables de imagen
const cardUsername = document.querySelector("#card-username");
const cardNumber = document.querySelector("#card-number");
const cardMonth = document.querySelector("#card-month");
const cardYear = document.querySelector("#card-year");
const cardCvc = document.querySelector("#card-cvc");



//logica para el campo  User name 
holderName.addEventListener('input', function () {
	cardUsername.textContent = holderName.value;

	//console.log(cardUsername.textContent);
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


mmYy.addEventListener('input', function () {
	var inputYear = mmYy.value;

	if (inputYear.length === 2) {
		mmYy.value = inputYear + '/';
	}

});

