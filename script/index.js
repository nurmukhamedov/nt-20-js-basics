// // const myArray = [1, 2, 3, 4, 5];

// // const newArray = myArray.findIndex((element) => element > 3);

// // console.log(newArray);

// const person = {
//     firstName: 'Muhammadrasul',
//     job: 'developer',
//     friends: {
//         firstName: 'John',
//         interest: {
//             first: 'football'
//         }
//     }
// }
// const person2 = {
//     firstName: 'Muhammadrasul',
//     job: 'developer',
//     friends: {
//         firstName: 'John'
//     }
// }

// const person3 = {
//     firstName: 'Muhammadrasul',
//     job: 'developer',
//     friends: {
//         firstName: 'John',
//         interest: {
//             first: 'football'
//         }
//     }
// }

// console.log(person.friends.interest.first);
// console.log(person2.friends.interest?.first);
// console.log(person3.friends.interest.first);


// const age = 32;

// const newAge = age;

// console.log(newAge);

// const person = {
//     firstName: 'Bob'
// }

// const newPerson = person;

// console.log(person);
// console.log(newPerson);

const form = document.querySelector("form");
const myInput = document.querySelector('.myInput');
const title = document.querySelector('.title');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = myInput.value;
    title.textContent = userInput;
    console.log(userInput);

    form.reset();
})