// const form = document.querySelector('form');
// const list = document.querySelector('.list');
// const userName = document.querySelector('.userName');
// const lastName = document.querySelector('.lastName');

// const storedNames = JSON.parse(localStorage.getItem("tasks")) || [];
// const names = storedNames;

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const newName = userName.value.trim();
//   const newLastName = lastName.value.trim();




//   if (newName !== "" && lastName !== "") {
//     const newTask = { name: newName, lastName: newLastName };

//     names.push(newTask);

//     localStorage.setItem("tasks", JSON.stringify(names));
//     form.reset();
//   }
//   renderNames();

// })


// function renderNames() {
//   list.innerHTML = ''
//   names.forEach((name, index) => {
//     const nameElement = document.createElement('h3');
//     const lastNameElement = document.createElement('h3');
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     nameElement.textContent = name.name;
//     lastNameElement.textContent = name.lastName;

//     deleteButton.addEventListener('click', () => {
//       names.splice(index, 1);
//       localStorage.setItem('tasks', JSON.stringify(names));
//       renderNames();
//     });

//     list.appendChild(nameElement);
//     list.appendChild(lastNameElement);
//     list.appendChild(deleteButton);
//   });
// }
// renderNames();



// (function () {
//   var firstName = 'Muhammadrasul';
//   console.log(firstName);

// })();

const form = document.querySelector('form');
const userName = document.querySelector('.userName');
const lastName = document.querySelector('.lastName');



const userNameError = document.querySelector('.error-name');

form.addEventListener('submit', () => {
  const userNameValue = userName.value.trim();
  const lastNameValue = lastName.value.trim();



  if (userNameValue === "" || userNameValue.length < 6) {
    userNameError.textContent = '6 ta harfdan kam yoki bo`sh bo `lishi mumkin emas';
    userNameError.classList.add('error');
  } else {
    userNameError.textContent = '';
    userNameError.classList.remove('error');
  }


})

userName.addEventListener('input', (event) => {
  const inputValue = event.target.value;

  if (inputValue.length <= 6) {
    userNameError.textContent = '6 ta harfdan kam ';
  } else {
    userNameError.textContent = '';
  }

})


const menu = document.querySelector('.menu');


const mySet = menu.dataset;
console.log(mySet);


console.log(mySet.hello_world);

menu.setAttribute("hello", "menu-name")

const menuAttribute = menu.getAttribute("class");
console.log(menuAttribute);
const myArray = [8, 2, 3, 4, 5, 6, 7];

const myFragment = new DocumentFragment();

myArray.forEach((element) => {
  const li = document.createElement('li');
  li.textContent = element;

  myFragment.appendChild(li);
})

menu.appendChild(myFragment)

// import { exampleFunction } from "./helper";
// console.log(exampleFunction);

console.log(menu.outerHTML);



const list = document.querySelector('.list');

list.insertAdjacentHTML('beforeend', '<p>Why</p>');

import myFun from './helper.js';

console.log(myFun());