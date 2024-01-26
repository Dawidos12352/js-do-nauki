import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryArray = []

galleryItems.forEach(e => {

    const galleryItem = document.createElement("div");
    const galleryLink = document.createElement("a");
    const galleryImage = document.createElement("img");

    galleryItem.className = "gallery__item";
    galleryLink.className = "gallery__link";
    galleryImage.className = "gallery__image";

    galleryLink.href = e.original;

    galleryImage.src = e.preview;
    galleryImage.setAttribute("data-source", e.original);
    galleryImage.alt = e.description;

    galleryLink.append(galleryImage);
    galleryItem.append(galleryLink);
    galleryArray.push(galleryItem);

})


gallery.append(...galleryArray);
console.log(gallery)

gallery.addEventListener("click" , e => {
    e.preventDefault();

    if(e.target.nodeName !== "IMG"){
        return;
    }

    const dataSourceImage = e.target.getAttribute("data-source");

    const instance = basicLightbox.create(
        `<img src=${dataSourceImage} width="800" height="600">`
    , {
    onShow: (instance) => {
        document.addEventListener("keydown" , e => {
            if ( e.key === "Escape") instance.close();
        });
    }}

    )
    instance.show();
})