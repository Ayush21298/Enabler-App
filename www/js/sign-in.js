var inviteInput = document.querySelector('.invite-input');
var inviteLabel = document.querySelector('.label-code');
var inviteError = document.querySelector('.code-result-error');

var numberInput = document.querySelector('.number-input');
var numberLabel = document.querySelector('.label-phone');
var numberError = document.querySelector('.phone-result-error');
var otpButton = document.querySelector('.get-otp-btn');
var signInForm = document.querySelector('.sign-in-form');

numberInput.addEventListener("keyup", (e)=>{
	if(numberInput.value.length > 0) {
		otpButton.classList.add('otp-btn-active');
		numberLabel.style.display="inline-block";
	} else {
		otpButton.classList.remove('otp-btn-active');
		numberLabel.style.display="none";
	}
});
inviteInput.addEventListener("keyup",(e)=>{
	if(inviteInput.value.length > 0) {
		inviteLabel.style.display = "inline-block";
	} else {
		inviteLabel.style.display = "none";
	}
}) 
function showInviteError() {
	inviteError.style.opacity = 1;
	inviteInput.style.borderBottomColor = "#ff4f43";
}
function hideInviteError() {
	inviteError.style.opacity = 0;
	inviteInput.style.borderBottomColor = "#647a9e";
}

function showNumberError() {
	numberError.style.opacity = 1;
	numberInput.style.borderBottomColor = "#ff4f43";
}
function hideNumberError() {
	numberError.style.opacity = 0;
	numberInput.style.borderBottomColor = "#647a9e";
}

signInForm.addEventListener("submit", (e)=> {
	e.preventDefault();
	const formData = new FormData(e.target);
	var obj = {};
	formData.forEach((v,k)=> obj[k]=v)
	console.log(JSON.stringify(obj));
	window.location.assign("otp-screen.html");
});
