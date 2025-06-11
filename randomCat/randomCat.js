/* eslint-env browser */

const img = document.getElementById('image');
const btn = document.getElementById('cat-btn');
const catLoading = document.getElementById('cat-load-text')


btn.addEventListener('click', () => {
    catLoading.textContent = 'Getting a cute cat!'
    img.src = './cat-loading.png'
    fetch('https://api.thecatapi.com/v1/images/search?size=small&limit=1', {mode: 'cors'})
        .then(response => response.json())
        .then(response =>{ 
            catLoading.textContent = ''
            img.src = response[0].url
            console.log(response[0].url)
        })
        .catch(err => console.log(err))

})