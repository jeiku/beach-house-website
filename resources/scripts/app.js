const menuToggler = document.querySelector(".nav__toggle");
const amenitiesBottom = document.querySelector(".amenities__bottom");
const viewMoreButton = document.querySelector(".amenities__button");
const arrow = document.querySelector("#amenities__arrow");
const upArrow = document.querySelector("#up");
const howMuch = document.querySelector(".amenities__more");

document.addEventListener("DOMContentLoaded", () => {
  menuToggler.addEventListener("click", function () {
    body.classList.toggle("open");
  });

  viewMoreButton.addEventListener("click", () => {
    viewMoreButton.classList.toggle("view");
    amenitiesBottom.classList.toggle("show");

    if (howMuch.textContent === "more") {
      howMuch.textContent = "less";
      // console.log(howMuch.textContent);
    } else {
      howMuch.textContent = "more";
    }
  });
});

// SCROLL REVEAL

window.sr = ScrollReveal();

sr.reveal(".animate-right", {
  origin: "left",
  duration: 1600,
  distance: "2rem",
  delay: 600,
});

// RATINGS

let count = 1;
const rating1Div = document.getElementById("rating1");
const rating2Div = document.getElementById("rating2");
const rating3Div = document.getElementById("rating3");
const body = document.querySelector("body");

function transition() {
  if (count == 1) {
    document.getElementById("rating1").style.animation =
      "rating-slide 7s ease-in";
    document.getElementById("rating3").style.animation = "";
    count = 2;
  } else if (count == 2) {
    document.getElementById("rating2").style.animation =
      "rating-slide 7s ease-in";
    document.getElementById("rating1").style.animation = "";
    count = 3;
  } else if (count == 3) {
    document.getElementById("rating3").style.animation =
      "rating-slide 7s ease-in";
    document.getElementById("rating2").style.animation = "";
    count = 1;
  }
}

setInterval(transition, 8000);
