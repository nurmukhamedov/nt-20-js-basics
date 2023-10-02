// let sumOfNumbers = 0;

// for (let i = 1; i <= 5; i++) {
//     let userInput = prompt(`Enter number ${i}`);

//     if (userInput == "" || userInput === "0") {
//         console.log('Invalid string');
//     } else {
//         let number = parseInt(userInput);
//         if (!isNaN(number)) {
//             sumOfNumbers += number
//         } else {
//             console.log("Invalid string");
//         }
//     }
// }

// console.log(sumOfNumbers);



// Task3


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array2 = [1, 2, 3, 4, 5];

// function divideSumEvenOdd(arr) {

//     let evenSum = 0;
//     let oddSum = 0;

//     for (const element of arr) {
//         if (element % 2 === 0) {
//             evenSum += element
//         } else {
//             oddSum += element
//         }
//     }

//     const newArray = [oddSum, evenSum]
//     return newArray;
// }

// console.log(divideSumEvenOdd(array));
// console.log(divideSumEvenOdd(array2));



// const obj = {
//     Tom: 1200,
//     Adel: 2000,
//     John: 1400,
//     Jack: "2300",
//     Mil: undefined
// }


// function calcSalaries(salaries) {
//     let total = 0;
//     for (const key in salaries) {
//         let salary = salaries[key];
//         if (typeof salary === 'string') {
//             salary = Number(salary);
//         } else if (typeof salary === 'undefined') {
//             salary = 0;
//         }
//         if (salaries.hasOwnProperty(key)) {
//             total += salary
//         }

//     }

//     return total
// }

// console.log(calcSalaries(obj));


// function findMissingNum(arr) {
//     const minValue = Math.min(...arr);
//     const maxValue = Math.max(...arr);
//     const newArray = [];


//     for (let i = minValue; i <= maxValue; i++) {
//         newArray.push(i);
//     }

//     const missingArray = newArray.filter((element) => !arr.includes(element))


//     console.log(missingArray);
// }

// const arr = [0, -4, 5, 8]
// findMissingNum(arr);




// const items = document.querySelectorAll('.list li');

// items.forEach((item, index) => {
//     item.addEventListener('click', () => {
//         console.log(`clicked ${index}`);
//     })
// })


// const form = document.querySelector('form');
// const list = document.querySelector('.list');
// const userName = document.querySelector('.userName');
// const names = [];

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const newName = userName.value.trim();

//     if (newName !== "") {
//         names.push(newName);
//         localStorage.setItem("tasks", JSON.stringify(names));
//         form.reset();
//     }

//     renderNames();

// })


// function renderNames() {

//     list.innerHTML = '';

//     names.forEach((name) => {
//         const nameElement = document.createElement('h3');
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         nameElement.textContent = name;
//         list.appendChild(nameElement);
//         list.appendChild(deleteButton);
//     });
// }





