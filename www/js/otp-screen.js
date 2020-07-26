window.onload = () => {
	 var hourglassBar = document.querySelector('.hourglass-bar');
	 var hourglassTime = document.querySelector('#hourglass-time');
	 var time = 40;
	 var timer = setInterval(()=>{
	 	hourglassTime.innerText = time;
	 	hourglassBar.style.width = (76.3/40 * time).toString() + "vw";
	 	time = time - 1;

	 	if( time < 0) {
	 		clearInterval(timer);
	 		window.location.assign("otp-failed.html");
	 	}
	 },1000);
}

var otpForm = document.querySelector('.otp-form');
var otpBoxes = document.querySelectorAll('.otp-input-box');
otpBoxes.forEach(box => {
	box.addEventListener("input", (e)=>{
		var otp = checkOtp();
		if(otp.length === 4) {
			alert("Testing OTP " + otp);
			otpSuccess();
			return;
		}
		if(e.target.value.length == 1) {
			if(e.target.parentNode.nextElementSibling != null) {
				e.target.parentNode.nextElementSibling.children[0].focus();
			}
		}
	});
})

function checkOtp() {
	var otpValue = "";
	otpBoxes.forEach(box => otpValue = otpValue + box.children[0].value);
	return otpValue;
}

function otpError() {
	var otpContainer = document.querySelector('.otp-input-container');
	var otpMessage = document.querySelector('.otp-invalid-msg');
	var otpResendText1 = document.querySelector('.resend-otp-txt-1');
	var otpResendText2 = document.querySelector('.resend-otp-txt-2');
	otpContainer.className = "otp-input-container-err";
	otpMessage.style.opacity = 1;
	otpResendText1.className = "resend-otp-txt-1-err";
	otpResendText2.className = "resend-otp-txt-2-err";
}

function otpSuccess() {
	setTimeout(()=>{
		window.location.assign("slider-prologue.html");
	},1000)
}