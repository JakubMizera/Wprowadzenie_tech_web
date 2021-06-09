const btn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
btn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

let photo = "";


window.onclick = (e) => {
  console.log(e.target.src);
  console.log(e.target);
  photo = e.target.src;
  let photoSrc = e.target;
  return photoSrc
};

const img1 = document.querySelector("#img1");
// const anyImg = document.querySelectorAll("img");
// console.log(anyImg);
const body = document.querySelector("body");
const lightBox = document.querySelector(".lightBox");
const lightBoxImage = document.querySelector("#lightBoxImage");

// img1.addEventListener("click", () => openLightBox(photo));
photoSrc.addEventListener("click", () => openLightBox(photo));

function openLightBox(imgSrc) {
  lightBox.classList.add("visible");
  lightBoxImage.src = imgSrc;
  body.style.overflow = "hidden";
}

lightBox.addEventListener("click", () => closeLightBox());

function closeLightBox() {
  lightBox.classList.remove("visible");
  body.style.overflow = "visible";
}
