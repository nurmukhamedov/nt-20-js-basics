// const myFirstDiv = document.querySelector('.first');
// // const secondDiv = myFirstDiv.previousElementSibling;
// // console.log(secondDiv);

// const firstParent = myFirstDiv.parentNode;

// console.log(firstParent);


// const button = document.querySelector('.btn');

// const closestElement = button.closest('.inner');

// console.log(closestElement);

// function multiply(number) {
//     const myNum = 8;

//     return function (factor) {
//         return number * factor + myNum;
//     }
// }


// const sayHello = function (name, callback) {
//     console.log(`Hello ${name}`);
//     callback()
// }

// const sayGoodBye = () => {
//     console.log('Bye');
// }

// sayHello('Muhammadrasul', sayGoodBye)


// const newNumber = multiply(5);

// console.log(newNumber(4)); 

// const myData = fetch('https://jsonplaceholder.typicode.com/photos');

// console.log(myData);




fetch('https://jsonplaceholder.typicode.com/photos').then(function (response) {
    return response.json();
}).then(function (data) {

    const myData = data.slice(0, 100);
    const main = document.querySelector('.main');
    const myFragment = new DocumentFragment();
    myData.forEach((data) => {
        const card = document.createElement('div');
        const img = document.createElement('img');
        img.src = data.url;
        img.alt = data.title;
        myFragment.appendChild(img);
        const h2 = document.createElement('h2');
        h2.textContent = data.title;
        myFragment.appendChild(h2);
        card.appendChild(myFragment);
        main.appendChild(card);
    })
}).catch(function (error) {
    console.log(error);
})
