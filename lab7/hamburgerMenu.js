const btn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
btn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

const img1 = document.querySelector("#img1");
img1.addEventListener("click", () => openLightBox("images/girl.jpg"));

function openLightBox(imgSrc) {
  const lightBox = document.querySelector(".lightBox");
  const lightBoxImage = document.querySelector("#lightBoxImage");
  lightBox.classList.add("visible");
  lightBoxImage.src = imgSrc;
}

window.onclick = (e) => {
  console.log(e.target);
};

// img1.addEventListener("click", openLightBox);

// function openLightBox() {
//   const lightBox = document.querySelector(".lightBox");
//   lightBox.classList.add("visible");
// }
