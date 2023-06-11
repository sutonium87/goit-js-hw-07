import { galleryItems } from "./gallery-items.js";
const galleryElement = document.querySelector(".gallery");

function renderGallery() {
  const galleryMarkup = galleryItems
    .map(
      (item) => `
        <li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
          </a>
        </li>
      `
    )
    .join("");

  galleryElement.insertAdjacentHTML("beforeend", galleryMarkup);
}

renderGallery();

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
