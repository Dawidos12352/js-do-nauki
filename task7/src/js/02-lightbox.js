import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryArray =[];

galleryItems.forEach( e => {
    const galleryItem = document.createElement("li");

    const galleryLink = document.createElement("a");
    galleryLink.className = "gallery__item"
    galleryLink.href = e.original;

    const galleryImage = document.createElement("img");
    galleryImage.className = "gallery__image";
    galleryImage.src = e.preview;
    galleryImage.alt = e.description;

    galleryLink.append(galleryImage);
    galleryItem.append(galleryLink);
    galleryArray.push(galleryItem)

});

gallery.append(...galleryArray);
console.log(gallery)

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' ,captionDelay: 250});



