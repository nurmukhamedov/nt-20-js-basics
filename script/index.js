// inputNumber() funksiyasini yozing, kiritilgan input, raqam bo’lmagan qiymat bo’lguncha prompt orqali input so’rasin. Va kiritilgan raqamlarni bitta arrayga push qilib borsin. Qachonki raqam emas qiymat kirtilsa prompt ishdan to’xtab yig’ilgan raqamlar Arrayini return qilsin.
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// const filterNames = (names) => {
//     const filteredNames = names.filter((element) => element.includes("A"));
//     const toUppercasedNames = filteredNames.map((name) => name.toUpperCase());
//     return toUppercasedNames;
// }

// console.log(filterNames(names));

// const calcNumber = (numbers, num) => {
//     const changeNumbers = numbers.map((number) => number * num);
//     return changeNumbers;
// }
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 1; i <= 10; i++) {
//     console.log(calcNumber(myNumbers, i));
// }
// pure



// const person = {
//     firstName: "David",
//     age: 32,
//     job: "Developer",
//     numbers: [1, 2, 3, 4, 5],
//     info: function () {
//         console.log(this);
//         return `Salom men ${this.firstName} va men ${this.age} yoshdaman`
//     }
// }

// const person2 = {
//     firstName: "Nicole",
//     age: 22,
//     job: "Designer",
//     greeting: person.info
// }

// console.log(person.info());
// console.log(person2.greeting());

// for (const element in person) {
//     console.log(person[element]);
// }


// car degan obyekt yaratsiz, ichida name, model, narxi propertylari bo'lsin va check degan method bo'lsin u moshina nomi: narxi va modelini qaytarsin.


// const car = {
//     name: 'BMW',
//     model: 'X6',
//     price: 200.000,
//     check: function () {
//         return `Mashina nomi ${this.name} modeli ${this.model}, narxi ${this.price}`
//     }
// }

// console.log(car.check());

const cars = [
    {
        name: 'BMW',
        model: 'X7',
        price: 240,
        quantity: 8,
        image: 'https://imgd-ct.aeplcdn.com/0x0/n/cw/ec/132513/new-7-series-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80'
    },
    {
        name: 'Gentra',
        model: '1.5',
        price: 20,
        quantity: 15,
        image: 'https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/brands/einstiegsseite/1280x854_P90351044_highRes_the-new-bmw-8-series.jpg'
    },
    {
        name: 'Mercedes',
        model: 'S Class',
        price: 280,
        quantity: 2,
        image: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/140591/new-x1-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80'
    },
    {
        name: 'BYD',
        model: 'Song',
        price: 50,
        quantity: 20,
        image: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/140591/new-x1-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80'
    },
    {
        name: 'BYD',
        model: 'Chazor',
        price: 40,
        quantity: 18,
        image: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/140591/new-x1-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80'
    },
    {
        name: 'Mercedes',
        model: 'M 300',
        price: 120,
        quantity: 22,
        image: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/140591/new-x1-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80'
    },
]

const main = document.querySelector('.row');
for (element of cars) {

    const mainElement = document.createElement('div');
    const cardElement = document.createElement('div');

    const image = document.createElement('img');
    image.src = element.image;
    image.alt = element.name;

    const title = document.createElement('h2');
    title.textContent = element.name;

    const price = document.createElement('p');
    price.textContent = element.price;

    cardElement.appendChild(image);
    cardElement.appendChild(title);
    cardElement.appendChild(price);

    cardElement.classList.add('card');
    cardElement.width = '18rem';

    mainElement.classList.add('col-lg-4');

    mainElement.appendChild(cardElement);

    main.appendChild(mainElement)

}

