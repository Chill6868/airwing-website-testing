//MACY.JS
var macyInstance = Macy({
	container: "#portfolio-images",
	margin: {
		x: 10,
		y: 10,
	},
	mobileFirst: "true",
	columns: 1,
	breakAt: {
		576: 2,
		768: 3,
		992: 4,
		1200: 5,
	},
});

// MAIN
document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const allNavItems = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}

	allNavItems.forEach((item) =>
		item.addEventListener("click", () => {
			navList.classList.remove("show");
		})
	);

	window.addEventListener("scroll", addShadow);
});
