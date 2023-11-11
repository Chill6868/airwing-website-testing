document.addEventListener("DOMContentLoaded", function () {
	var header = document.querySelector("header");

	var backgrounds = new Array(
		"url(../img/header/hero-drone1.jpg)",
		"url(../img/header/hero-drone2.jpg)",
		"url(../img/header/hero-drone3.jpg)"
	);

	var current = 0;

	function nextBackground() {
		current++;
		current = current % backgrounds.length;
		header.style.backgroundImage = backgrounds[current];
	}
	setInterval(nextBackground, 6000);

	header.style.backgroundImage = backgrounds[0];
});
