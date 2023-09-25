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
// const main = document.querySelector('.row');
// function renderCars() {
//     main.innerHTML = '';
//     for (element of cars) {

//         const mainElement = document.createElement('div');
//         const cardElement = document.createElement('div');

//         const image = document.createElement('img');
//         image.src = element.image;
//         image.alt = element.name;

//         const title = document.createElement('h2');
//         title.textContent = element.name;

//         const price = document.createElement('p');
//         price.textContent = element.price;

//         cardElement.appendChild(image);
//         cardElement.appendChild(title);
//         cardElement.appendChild(price);

//         cardElement.classList.add('card');
//         cardElement.width = '18rem';

//         mainElement.classList.add('col-lg-4');

//         mainElement.appendChild(cardElement);

//         main.appendChild(mainElement)

//     }
// }
// function sortByLowToHigh() {
//     cars.sort((a, b) => a.price - b.price);
//     renderCars();
// }
// function sortByHighToLow() {
//     cars.sort((a, b) => b.price - a.price);
//     renderCars();
// }
// function sortByAtoZ() {
//     cars.sort((a, b) => a.name.localeCompare(b.name));
//     renderCars();
// }
// function sortByZtoA() {
//     cars.sort((a, b) => b.name.localeCompare(a.name));
//     renderCars();
// }

// const lowToHighBtn = document.getElementById("lowToHigh");
// const highToLowBtn = document.getElementById("highToLow");
// const aToLowZ = document.getElementById("azTitle");
// const ZToLowA = document.getElementById("zaTitle");

// lowToHighBtn.addEventListener('click', sortByLowToHigh);
// highToLowBtn.addEventListener('click', sortByHighToLow);
// aToLowZ.addEventListener('click', sortByAtoZ);
// ZToLowA.addEventListener('click', sortByZtoA);
// renderCars();



// localStorage.setItem("language", JSON.stringify(cars));
// const myItem = localStorage.getItem("language");

// console.log(JSON.parse(myItem));


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 35
// }


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const userName = " Jonibek ";
console.log(userName.trim());



// isEmpty() nomli funksiya yozing. Unga Object berib yuborganimda ichida propertylari bo’lsa false, hech qanday propertysi bo’lmasa true qaytarsin.
// a. Yordam: Object.keys

// Quyida berilgan Object dagi shaxslar daromadlarini jamini xisoblab chiqaruvchi funksiya yozing. Funksiya PURE (toza) bo’lishi shart!
// let salaries = {John: 100, Ann: 160,Pete: 130}

