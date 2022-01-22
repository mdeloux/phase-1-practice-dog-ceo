console.log('%c HI', 'color: firebrick')



function loadIMG() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(response => response.json())
        .then(json => renderImg(json))

}

function renderImg(images) {
    const loc = document.querySelector('div')
    images.message.forEach(Image => {
        const img = document.createElement('img');
        img.src = Image;
        loc.appendChild(img)
    });
}


document.addEventListener('DOMContentLoaded', () => {
    loadIMG()
})

function dogBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => renderBreed(data))
}
function renderBreed(data) {
    const ul = document.getElementById('dog-breeds');
    for (dog in data) {
        const li = document.createElement('li')
        const node = document.createTextNode(dog);
        li.appendChild(node);
        ul.appendChild(li);
    }
}
dogBreeds();

