// Just putting some comments in Here

/*
This is the way MDN wanted me to do things to represent a multi line comment, but typically
I'm just going to use the hotkey CTL-/
*/

console.log('In app.js...')

function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'This is the stock Message...';
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParagraph);
}
