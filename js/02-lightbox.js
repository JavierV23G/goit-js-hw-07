import { galeriaItems } from './galeria-items.js';
// Change code below this line

const galeria = document.querySelector(".galeria");

const createListItem = image => {
  return `<li class="galeria__item">
    <a class="galeria__link" href="${image.original}">
        <img class="galeria__image" src="${image.preview}" alt="${image.description}" />
    </a>
</li>`;
};

for (const image of galeriaItems) {
  const newImage = createListItem(image);
  galeria.innerHTML += newImage;
}

var lightbox = new SimpleLightbox(".galeria a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

lightbox.on("show.simplelightbox", function (e) {
  e.preventDefault();
});