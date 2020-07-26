var profileButton = document.querySelector('.profile');
var sideBar = document.querySelector('.home-sidebar');
var slides = document.querySelectorAll('.slide');
var slider = document.querySelector('.slider')
var carouselLinks = document.querySelectorAll('.next-step > a');
var sliderPosition = document.querySelector('.slide-position');
var cloudButton = document.querySelector('.cloud-button');

window.addEventListener('click', (e) => {
	if(cloudButton.contains(e.target)) {
		window.location.assign("data-found.html");
	}
	else if(profileButton.contains(e.target)) {
		sideBar.style.display = "block";
		sideBar.classList.add("slide-in");
		sideBar.classList.remove("slide-out");
	} else {
		sideBar.classList.remove("slide-in");
		sideBar.classList.add("slide-out");
		sideBar.style.display = "none";
	}
})
window.onload = () => {
	var timer = setInterval(()=>{
		for(var i=2;i>=0;i--) {
			var box = slides[i].getBoundingClientRect();
			sliderPosition.children[i].classList = "dot";
			if(box.left >= 0 && box.left < window.innerWidth*2/3) {
			  sliderPosition.children[i].classList = "dot-active";
			}
		  }
	},500);
}
