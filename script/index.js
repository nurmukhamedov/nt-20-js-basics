// const numbers = [1, 3, -6, -7, 5.8, 6.5, 8, 4.2, -3, -5, -9.8, 2.2, -3.2];
// const realNumbersOfArray = []
// for (const number of numbers) {
//     let realNumber = Math.round(number);

//     if (realNumber < 0) {
//         realNumber = -realNumber;
//     }
//     if (!realNumbersOfArray.includes(realNumber)) {
//         realNumbersOfArray.push(realNumber);
//     }
// }
// console.log(realNumbersOfArray);
// const realNumOfArray = [];

// const numbers = [18, 22, 74, 68, 5, 6, 7, 8, 9, 10];

// numbers.splice(1, 2, 10, 11)
// console.log(numbers);

// const names = ["John", "Bob", "Jack", "Tom"];

// const newNames = names.slice(0, 3);
// console.log(newNames);


// const ages = [18, 22, 74, 68, 5, 6, 7, 8, 9, 10];

// const checkAges = ages.some((age) => checkAge(age))

// function checkAge(age) {
//     if (age > 65) {
//         return true
//     }
// }

// console.log(checkAges);

// if (checkAges) {
//     console.log('65 dan kattasi bor');
// }

// const ages = [18, 22, 74, 68, 5, 6, 7, 8, 9, 10];
// const newArray1 = [];

// ages.forEach((num, index, array) => {
//     if (num % 2 !== 0) {
//         newArray1.push(num)
//     }
// })
// console.log(ages);


// const newArray = ages.map((number, index) => {
//     return number * 2;
// })
// console.log(newArray);

const names = ["David", "Anna", "Bob", "Albert", "Christian", "John"];

// names.sort();
// console.log(names);

// const numbers = [3, 8, 9, 6, 7, 2, 0];

// const greaterNumbers = numbers.filter((number, index) => {
//     if (number > 4) {
//         return number
//     }
// })

// console.log(greaterNumbers);

// const totalNumber = numbers.reduce((acc, element) => {
//     return acc + element
// }, 0)
// console.log(totalNumber);


// funksiya yozing array qabul qilsin va filter yordamida faqat toq sonlarni qaytarsin.

// funksiya yozing array qabul qilsin va -sonlarni 2* ga ko'paytirib qaytarsin map ishlatsangiz bo'ladi.


const arr = [1, 3, -6, 4, 8, -5];
const ages = [18, 22, 74, 68, 5, 6, 7, 8, 9, 10, -1, 0, -10, undefined];

const getEvenNumbers = function (array) {
    return array.filter((number) => number % 2 !== 0);
};

const newNumbers = getEvenNumbers(arr)
const newNumbers2 = getEvenNumbers(ages)
console.log(newNumbers);
console.log(newNumbers2);

const changeNumbers = function (array) {
    return array.map((num) => {
        if (num < 0) {
            return num * 2
        }
    }).filter((number) => number !== undefined)
}

const myNums = changeNumbers(arr);
const myNums2 = changeNumbers(ages);
console.log(myNums);
console.log(myNums2);