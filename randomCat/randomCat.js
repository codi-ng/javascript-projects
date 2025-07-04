/* eslint-env browser */

const img = document.getElementById('image');
const btn = document.getElementById('cat-btn');
const catLoading = document.getElementById('cat-load-text');

async function getCat(){
    const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?size=small&limit=1',
        { mode: 'cors' }
    );
    const data = await response.json();

    return data[0].url
}


btn.addEventListener('click', async () => {
    catLoading.textContent = 'Getting a cute cat!';
    img.src = './cat-loading.png';
    const cat = await getCat();

    catLoading.textContent = '';
    img.src = cat;
    console.log(cat);
});
