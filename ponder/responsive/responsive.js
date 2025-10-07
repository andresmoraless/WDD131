const menuBar = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBar.addEventListener("click", function() {
    nav.classList.toggle("hidden");
    menuBar.classList.toggle("open");
});