// ===== MENU TOGGLE =====
const menuButton = document.querySelector("#menu");
const navList = document.querySelector("nav ul");

// Hide the menu by default
navList.classList.add("hide");

// Toggle menu when button is clicked
menuButton.addEventListener("click", () => {
    navList.classList.toggle("hide");
});

// ===== HANDLE WINDOW RESIZE =====
function handleResize() {
    if (window.innerWidth > 1000) {
    navList.classList.remove("hide");
    } else {
    navList.classList.add("hide");
    }
}

window.addEventListener("resize", handleResize);
handleResize(); // run once at start

// ===== IMAGE VIEWER (MODAL) =====
const gallery = document.querySelector(".gallery");
const modal = document.createElement("dialog");
document.body.appendChild(modal);

    gallery.addEventListener("click", (event) => {
    const clickedImage = event.target.closest("img");
    if (!clickedImage) return;

    const src = clickedImage.getAttribute("src");
  const base = src.split("-")[0]; // e.g., "images/norris"
    const fullImage = `${base}-full.jpeg`;

    modal.innerHTML = `
    <img src="${fullImage}" alt="${clickedImage.alt}">
    <button class="close-viewer">X</button>
    `;

    modal.showModal();

    const closeButton = modal.querySelector(".close-viewer");
    closeButton.addEventListener("click", () => {
    modal.close();
    });
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
    modal.close();
    }
});
