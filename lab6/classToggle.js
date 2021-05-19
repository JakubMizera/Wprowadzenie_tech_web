const btn = document.querySelector("#btn");
const navigation = document.querySelector('.navigation');
console.log(btn);
console.log(navigation);
btn.addEventListener("click", () => {
    navigation.classList.toggle('hide');
});
