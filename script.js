const imageContainerEl = document.querySelector('.image-container');

const btnEl = document.getElementById('btnAdd');
const btnDeleteEl = document.getElementById('btnDelete');

btnEl.addEventListener("click", () => {
    addNewImages();
})

btnDeleteEl.addEventListener("click", () => {
    deleteImages();
})

function addNewImages(){
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    imageContainerEl.appendChild(newImgEl);
}

function deleteImages(){
    const images = imageContainerEl.querySelectorAll("img");
    images.forEach((image) => {
        image.remove();
    })
}