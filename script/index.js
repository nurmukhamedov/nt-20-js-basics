// // objects
// const title = document.querySelector('.title');
// const text = document.querySelector('.text');
// const person = {
//     "name": 'Muhammadrasul',
//     age: 22,
//     job: 'Developer',
//     isMarried: false,
//     friends: {
//         name1: 'John'
//     }
// }

// title.textContent = person.name;
// text.textContent = `Hello my name is ${person.name}, men ${person.age} yoshdaman, men ${person.job}`;

// console.log(person.name);


const fruits = ["Banana", "Apple", "Peach", ['shiring', 'achchiq']];


// fruits.pop();
// fruits.shift();
// fruits.push('Hello world', 'Strawberry');
// fruits.unshift('my name');

const arr = [155, 555, 44, 55, 125, 340, 80];



// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

function myFunction(userNumber) {
    if (userNumber > 50 && userNumber < 300) {
        return userNumber * 0.15
    } else {
        return userNumber * 0.3
    }
}

for (let index = 0; index < arr.length; index++) {
    console.log(myFunction(arr[index]));
}

// function caclBill(bills) {

//     for (let index = 0; index < bills.length; index++) {
//         const number = bills[index];
//         if (number > 50 && number < 300) {
//             return number * 0.15
//         } else {
//             return number * 0.3
//         }
//     }
// }
// console.log(caclBill(arr));


