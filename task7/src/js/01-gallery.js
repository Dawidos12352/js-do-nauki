import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

// 1

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


// 2

// const newImage = galleryItems.map(e => 
//     `<div class="gallery__item">
//     <a class="gallery__link" href="${e.original}">
//         <img class="gallery__image" src="${e.preview}" data-source="${e.original}" alt="${e.description}"/>
//     </a>
// </div>`
// ).join("")

  


// gallery.insertAdjacentHTML("beforeend" , newImage);





gallery.addEventListener("click", e => {
    e.preventDefault();

    if(e.target.nodeName !== "IMG"){
        return
    }
const imageSrc = e.target.getAttribute("data-source");

    const instance = basicLightbox.create(
        `<img src="${imageSrc}" width="800" height="600">`
    , {
        onShow: (instance) => {
            document.addEventListener("keydown", e => {
                if(e.key === "Escape") instance.close();
            })
        }}
    )

instance.show();


})