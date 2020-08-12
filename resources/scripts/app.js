const menuToggler = document.querySelector(".menu-toggle");

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

let count = 1;
const rating1Div = document.getElementById("rating1");
const rating2Div = document.getElementById("rating2");
const rating3Div = document.getElementById("rating3");
const body = document.querySelector("body");

function transition() {

	if(count == 1) {
		document.getElementById("rating1").style.animation = "rating-slide 7s ease-in";
		document.getElementById("rating3").style.animation = "";
		count = 2;

	} else if(count == 2) {
		document.getElementById("rating2").style.animation = "rating-slide 7s ease-in";
		document.getElementById("rating1").style.animation = "";
		count = 3;

	} else if(count == 3) {
		document.getElementById("rating3").style.animation = "rating-slide 7s ease-in";
		document.getElementById("rating2").style.animation = "";
		count = 1;
	}
	

}

setInterval(transition, 8000);


// let i = 1;
// while (i  < 90000) {
// 	console.log(i);
// 	i++;
// }

// setInterval(function(){
// 	setTimeout(function() {

// 	}, 1)
// 	console.log("1");
// 	body.classList.add("rating1");
// 	body.classList.add("rating2");
// 	body.classList.add("rating3");

// }, 13000).then(console.log("timesup"));

// var div
// function cycle(id) {
// 	var nextId = (id == "block1") ? "block2": "block1";
// 	$("#" + id)
// 		.delay(shortIntervalTime)
// 		.fadeIn(500)
// 		.delay(longIntervalTime)
// 		.fadeOut(500, function() {cycle(nextId)});
// }

// const rating1 = document.getElementById("rating1");
// const rating2 = document.getElementById("rating2");
// const rating3 = document.getElementById("rating3");

// function cycle(div){
// 	let nextDiv;
// 	if (div == rating1) {
// 		nextDiv = rating2;
// 	} else if (div == rating2){
// 		nextDiv = rating3;
// 	}
// 	setTimeout(function() {
// 		body.classList.remove("rating-slide3")
// 		body.classList.add("rating1");
// 	}, 3000);
// 	setTimeout(function() {
// 		body.classList.remove("rating-slide3")
// 		body.classList.add("rating1");
// 	}, 3000);
// 	setTimeout(function() {
// 		body.classList.remove("rating-slide3")
// 		body.classList.add("rating1");
// 	}, 3000)
	
// }

// cycle(rating1);

// while(true){
// 	window.setTimeout(function () {
// 		console.log("1");
// 		// body.classList.add("slide-left-purple");
// 	}, 1000);
// }