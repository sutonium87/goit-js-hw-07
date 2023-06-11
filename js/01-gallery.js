import { galleryItems } from "./gallery-items.js";
const galleryElement = document.querySelector(".gallery");

function renderGallery() {
  const galleryMarkup = galleryItems
    .map(
      (item) => `
        <li class="gallery__item">
          <a class="gallery__link" href="#">
            <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
          </a>
        </li>
      `
    )
    .join("");
  galleryElement.insertAdjacentHTML("beforeend", galleryMarkup);
}

renderGallery();

let lightboxInstance = null;
console.log(lightboxInstance);
galleryElement.addEventListener("click", (e) => {
  e.preventDefault();
  const clickedElement = e.target;
  if (clickedElement.tagName === "IMG") {
    const largeImageURL = clickedElement.dataset.source;
    lightboxInstance = basicLightbox.create(`
      <img src="${largeImageURL}" alt="${clickedElement.alt}" />
    `);
    lightboxInstance.show();
  }
});

document.addEventListener("keydown", (e) => {
  if (lightboxInstance && e.key === "Escape") {
    lightboxInstance.close();
  }
});
