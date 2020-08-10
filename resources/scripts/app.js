const menuToggler = document.querySelector(".menu-toggle");
const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
	menuToggler.addEventListener("click", function () {
		body.classList.toggle("open");
	});
});

// Scroll Reveal
window.sr = ScrollReveal();

sr.reveal(".animate-right", {
	origin: "left",
	duration: 1600,
	distance: "2rem",
	delay: 600
});