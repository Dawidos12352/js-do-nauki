const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector(".gallery");

const galleryItems = images.forEach((e) => {
  galleryList.insertAdjacentHTML("afterbegin", `
  <li>
    <img src="${e.url} alt ="${e.alt}" width="500px" height="300px"/>
  </li>`)
})

const listElements = document.querySelectorAll("li");


listElements.forEach((e) => {
  e.className = "item"
})

galleryList.style.display = "flex"
galleryList.style.gap = "20px"
galleryList.style.listStyle = "none";
galleryList.style.justifyContent = "center"

const picture = document.querySelectorAll("img")

picture.forEach(e => {
e.className = "picture"
e.style.borderWidth = "10px"
e.style.borderStyle = "solid"
e.style.borderRadius = "50%"
e.style.borderColor = "teal"
})