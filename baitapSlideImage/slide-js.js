var slides = document.getElementsByClassName("slide")
var dots = document.getElementsByClassName("dot");

var slideIndex = 1;
var TIME_AUTO_SEC = 4;

showSlide();
setInterval(function(){showSlide(slideIndex += 1);}, TIME_AUTO_SEC*1000);

function showSlide(n){
	if (n > slides.length){
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
		dots[i].classList.remove("active"); 
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].classList.add("active");
}
function plusSlides(n){
	showSlide(slideIndex += n);
	console.log("Run");
}
function currentSlide(n){
	showSlide(slideIndex = n);
}