const myText2 = document.querySelector('#description');
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    myText2.textContent = 'Clicked';
    myText2.classList.add('extra-text');
});


// function addClass(varName, text, addedClass) {
//     myText2.textContent = text;
//     myText2.classList.add(addedClass);
// }
