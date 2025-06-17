/* eslint-env browser */

const img = document.getElementById('image');
const btn = document.getElementById('cat-btn');
const catLoading = document.getElementById('cat-load-text')


btn.addEventListener('click', async () => {
    catLoading.textContent = 'Getting a cute cat!'
    img.src = './cat-loading.png';
    const response =  await fetch('https://api.thecatapi.com/v1/images/search?size=small&limit=1', {mode: 'cors'});
    const data =  await response.json();

    catLoading.textContent = '';
    img.src = data[0].url;
    console.log(data[0].url)
});