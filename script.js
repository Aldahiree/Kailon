function scrollToSection(sectionId) {
document.getElementById(sectionId).scrollIntoView({
behavior: "smooth"
});
}

/* Image lightbox */
const lightbox = document.getElementById("image-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");

function openLightbox(image) {
if (!lightbox || !lightboxImage) return;

lightboxImage.src = image.src;
lightboxImage.alt = image.alt || "Expanded image";
lightbox.classList.add("open");
lightbox.setAttribute("aria-hidden", "false");
document.body.classList.add("lightbox-open");
}

function closeLightbox() {
if (!lightbox || !lightboxImage) return;

lightbox.classList.remove("open");
lightbox.setAttribute("aria-hidden", "true");
document.body.classList.remove("lightbox-open");

setTimeout(() => {
lightboxImage.src = "";
}, 220);
}

document.querySelectorAll("body img:not(#lightbox-image)").forEach((image) => {
image.addEventListener("click", () => openLightbox(image));
image.setAttribute("tabindex", "0");
image.setAttribute("role", "button");

image.addEventListener("keydown", (event) => {
if (event.key === "Enter" || event.key === " ") {
event.preventDefault();
openLightbox(image);
}
});
});

if (lightboxClose) {
lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
lightbox.addEventListener("click", (event) => {
if (event.target === lightbox) {
closeLightbox();
}
});
}

document.addEventListener("keydown", (event) => {
if (event.key === "Escape" && lightbox && lightbox.classList.contains("open")) {
closeLightbox();
}
});
