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

// logica botón Confirm

const form = document.querySelector("#formulario");

const formElements = document.querySelector("#form-elements");

const successContainer = document.querySelector("#success-container");

const inputs = form.querySelectorAll("input");

form.addEventListener('submit', function (event) {
	event.preventDefault();
	formElements.style.display = "none";
	successContainer.style.display = "block";



});

// distinto color para campo válido o inválido

inputs.forEach(input => {
	input.addEventListener("input", function () {
		if (input.checkValidity()) {
			input.classList.remove("invalid");
			input.classList.add("valid");
		}
		else {
			input.classList.remove("valid");
			input.classList.add("invalid");
		}
	})

});








// document.getElementById('confirm-btn').addEventListener('click', function(e){
// 	e.preventDefault();
// 	// formElements.style.display = "none";
// }
// );



// Poner barra "/"

// mmYy.addEventListener('input', function () {
// 	var inputYear = mmYy.value;

// 	if (inputYear.length === 2) {
// 		mmYy.value = inputYear + '/';
// 	}

// });

