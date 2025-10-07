// Future-proofing for mobile menu toggle
const menuBtn = document.getElementById("menu");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
});
