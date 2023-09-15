const arr1 = [1999, 2000, 2003, 2008];


// for (let index = 0; index < arr1.length; index++) {
//     const arrYear = arr1[index];
//     console.log(calcAge(arrYear));
// }

// function calcAge(year) {
//     const userAge = 2023 - year;
//     return userAge;
// }

// const arr2 = [2, 4, 8, 10, 12, 15];

// for (let index = 0; index < arr2.length; index++) {
//     const numberOfArray = arr2[index];
//     console.log(caclNumber(numberOfArray));
// }

// function caclNumber(number) {
//     return number * 2
// }

//
const arr3 = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 15];

// let calcOdd = 0;
// let calcEven = 0;
// let calcTotal = 0;
// for (let index = 0; index < arr3.length; index++) {
//     const element = arr3[index];
//     console.log(element);
//     calcTotal = calcTotal + arr3[index];
//     if (element % 2 !== 0) {
//         calcOdd = calcOdd + 1;
//     } else {
//         calcEven = calcEven + 1;
//     }
// }
// console.log(calcTotal);

// console.log(calcOdd);
// console.log(calcEven);

// console.log(...arr3);

// const checkNumber = Math.min(...arr3);

// console.log(checkNumber);

// const checkArray = arr3.includes(7);
// console.log(checkArray);

// if (checkArray) {
//     console.log('Siuuu');
// } else {
//     console.log('No name');
// }

// for (let index = 0; index < arr3.length; index++) {
//     const element = arr3[index];
//     if (element == 7) {
//         console.log('Siuuu');
//     } else {
//         console.log('no name');
//     }
// }

// array ichida 7 soni bo'lsa consolega siuu yo'q noname

// const myName = prompt('Ismingiz');
// const nameInUpperCase = myName.toUpperCase();
// console.log(nameInUpperCase);

// const checkMyName = nameInUpperCase.includes("Z");

// if (checkMyName) {
//     console.log('Noyob ism');
// }

const fruits = ["Banana", "Orange", "Apple", "Mango", undefined, 28, null, false];
let text = fruits.toString();
console.log(text.length);

const mynNumber = [1, 8, 10, 97, 87, 7];
console.log(mynNumber.includes(7));


// prompt orqali ism so'raysiz ism ichida z harfi bo'lsa console ga noyob ism degan natija qaytarsin.




const allArray = [1, 4, true, false, "", undefined, undefined, null, "Hello"];
const arrayOfString = [];
const arrayOfNumber = [];

//array ichida number typelarni alohida arrayga, string typelarni alohida arrayga, boolean typelarni alohida arrayga chiqaring. va har bir typedan nechtadan element borligini aniqlang.


//funksiya yozasiz array ichidagi ohirgi ma'lumot doim number bo'lishi kerak, agar number bo'lmasa (undefined yoki null bo'lsa) olib tashlang string bo'lsa numberga o'giring.