//My way is always better... 
console.log('in myApp.js...')

function createParagraph(response) {
    let para = document.createElement('p');
    para.textContent = response;
    document.body.appendChild(para);
}

const cheer = document.querySelector('#cheer');
const tickle = document.querySelector('#tickle');

cheer.addEventListener('click', () => { createParagraph('YAY!!!') });
tickle.addEventListener('click', () => { createParagraph('THAT TICKLES...!!') });
