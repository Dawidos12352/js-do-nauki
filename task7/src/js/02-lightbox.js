import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

//1


// const galleryArray =[];

// galleryItems.forEach( e => {
//     const galleryItem = document.createElement("li");

//     const galleryLink = document.createElement("a");
//     galleryLink.className = "gallery__item"
//     galleryLink.href = e.original;

//     const galleryImage = document.createElement("img");
//     galleryImage.className = "gallery__image";
//     galleryImage.src = e.preview;
//     galleryImage.alt = e.description;

//     galleryLink.append(galleryImage);
//     galleryItem.append(galleryLink);
//     galleryArray.push(galleryItem)

// });

// gallery.append(...galleryArray);
// console.log(gallery)


//2


const newImage = galleryItems.map((e) => 
    `<li> 
        <a class="gallery__item" href="${e.original}">
            <img class="gallery__image" src="${e.preview}" alt="${e.description}" />
        </a>
    </li>`
).join("")

gallery.insertAdjacentHTML("beforeend", newImage);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' ,captionDelay: 250});



