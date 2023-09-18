const array = [97, 57, 88, 58];
const stringOfArray = array.join();
console.log(stringOfArray);
const newArray = stringOfArray.split(',');
console.log(newArray);

const reversedArray = array.reverse();
console.log(reversedArray);

for (const element of array) {
    console.log(element);
}




// // funksiya yozasiz, parametrda ism qabul qiladi, siz bu ismni teskari holatda qaytarishingiz kerak bo'ladi.

// function reversedName(name) {
//     const nameInArray = name.split('').reverse('').join('');
//     return nameInArray
// }

const colors = ['red', 'blue', 'green', 'white', 'yellow', 'black'];
const checkColors = colors.indexOf('shaftoli', 4);
console.log(checkColors);
// const newmyColors = ['fdewfwe', 'vfewfvew']
// colors.splice(2, 0, ...newmyColors);
// console.log(colors);
// const newColors = colors.slice(3);

// const myString = 'Hello world, Js is amazing';
// const newString = myString.slice(1, 10)
// console.log(newColors);
// console.log(newString);


// function checkNumber(nums, number) {
//     const index = nums.indexOf(number);
//     return nums[index]
// }
// console.log(checkNumber(array, 97));

const numbers = [9, 8, 7, 11];

const isEven = numbers.some(num => checkNumber(num));
console.log(isEven);

function checkNumber(number) {
    return number % 2 === 0
}




