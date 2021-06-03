const btn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
console.log(btn);
console.log(nav);
btn.addEventListener("click", () => {
    nav.classList.toggle("open");
});
