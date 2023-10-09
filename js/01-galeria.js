import { galeriaItems } from "./galeria-items.js";

// Change code below this line
const galeria = document.querySelector(".galeria");
let instance;

const createListItem = image => {
  return `<li class="galeria__item">
  <a class="galeria__link" href="${image.original}">
    <img
      class="galeria__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`;
};

for (const image of galeriaItems) {
  const newImage = createListItem(image);
  galeria.innerHTML += newImage;
}

galeria.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  // console.log(e.target.dataset["source"]);
  const imageInModal = e.target.dataset["source"];
  openModal(imageInModal);
});

const openModal = imageSource => {
  instance = basicLightbox.create(`<img width="1280" src="${imageSource}">`);
  instance.show();

  window.addEventListener("keydown", closeModal);
};

const closeModal = e => {
  if (e.code === "Escape") {
    window.removeEventListener("keydown", closeModal);

    instance.close();
  }
};

console.log(galeriaItems);