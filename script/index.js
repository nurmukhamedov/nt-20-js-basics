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
//     const editButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     editButton.textContent = 'Edit';
//     nameElement.textContent = name.name;
//     lastNameElement.textContent = name.lastName;

//     deleteButton.addEventListener('click', () => {
//       names.splice(index, 1);
//       localStorage.setItem('tasks', JSON.stringify(names));
//       renderNames();
//     });

//     editButton.addEventListener('click', () => {
//       userName.value = name.name;
//       lastName.value = name.lastName;
//       names.splice(index, 1);
//     });
//     list.appendChild(nameElement);
//     list.appendChild(lastNameElement);
//     list.appendChild(editButton);
//     list.appendChild(deleteButton);
//   });
// }
// renderNames();

// import { exampleFunction as myFun, secondFn, myName, myObj } from "./helper.js";

// console.log(myFun());
// console.log(secondFn());
// console.log(myObj);

const arr = [1, 2, 3, 4, 5, 6];

// const [myNumber, hisNumber, herNumber] = arr;

// console.log(hisNumber);
// console.log(herNumber);


// const myObj = {
//   firstName: 'John',
//   lastName: 'Doe',
// }

// console.log(myObj);
// const { firstName: objName, lastName: objLastName } = myObj;
// console.log(objName);
// console.log(objLastName);

// const arr2 = [7, 8, 9, 10];
// const arr3 = [...arr, ...arr2];


// function myFun(...a) {
//   console.log(a);
// }

// myFun(1, 2, 3, 4, 6);


// const { firstName } = myObj
// console.log(firstName);
// console.log(myObj);


// const cars = [
//   {
//     name: 'BMw'
//   },
//   {
//     model: 'Lexus'
//   },
//   {
//     model: 'Lexus'
//   }
// ]

// cars.forEach(element => {
//   const carElements = Object.values(element);
//   console.log(carElements);
// });


// class Student {
//   constructor(name, age) {
//     this.studentAge = age;
//     this.firstName = name;
//   }

//   sayHello() {
//     return `Hello, I'am ${this.firstName}, my age is ${this.studentAge}`
//   }


// }

// const Shohjahon = new Student('Shohjahon', 20);


// console.log(Shohjahon);

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('button clicked');
// })

// console.log('hello world');


// micro task - ajax calls, promises, async await
// macro task - addEventListener, setTimeout

// setTimeout(() => {
//   console.log('time out');
// }, 3000);

// console.log('hello world');

// const myInterval = setInterval(() => {
//   console.log('hello set interval');
// }, 2000);


// const currentTime = new Date();
// const hours = currentTime.getSeconds();
// console.log(hours);

// console.log(currentTime);

const x = '5';

const newX = x.padStart(3, "a");

console.log(newX);