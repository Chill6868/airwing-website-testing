$(document).ready(function () {
	var header = $("header");

	var backgrounds = new Array(
		"url(../img/header/hero-drone1.jpg)",
		"url(../img/header/hero-drone2.jpg)",
		"url(../img/header/hero-drone3.jpg)"
	);

	var current = 0;

	function nextBackground() {
		current++;
		current = current % backgrounds.length;
		header.css("background-image", backgrounds[current]);
	}
	setInterval(nextBackground, 6000);

	header.css("background-image", backgrounds[0]);
});
