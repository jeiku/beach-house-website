const gallery = document.querySelector("#gallery");
const backMask = document.querySelector(".background__mask");

// let getVal = (elem, style) => {
//   return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
// };

// let getHeight = (item) => {
//   return item.querySelector(".content").getBoundingClientRect().height;
// };

// let resizeAll = () => {
//   let altura = getVal(gallery, "grid-auto-rows");
//   let gap = getVal(gallery, "grid-row-gap");
//   gallery.querySelectorAll(".gallery__item").forEach((item) => {
//     let el = item;
//     el.style.gridRowEnd =
//       "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
//   });
// };

// gallery.querySelectorAll("img").forEach((item) => {
//   if (item.complete) {
//     console.log(item.src);
//   } else {
//     item.addEventListener("load", () => {
//       let altura = getVal(gallery, "grid-auto-rows");
//       let gap = getVal(gallery, "grid-row-gap");
//       let gitem = item.parentElement.parentElement;
//       gitem.style.gridRowEnd =
//         "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
//     });
//   }
// });

// const div = document.createElement("div");
// const node = document.createTextNode("This is new.");

// window.addEventListener("resize", resizeAll);

if (screen.width > 600) {
  gallery.querySelectorAll(".gallery__item").forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("full");
      backMask.classList.toggle("darken");
    });
  });
}
