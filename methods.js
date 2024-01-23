// length

const fruits = ['apple', 'grapes', 'banana', 'kiwi'];
console.log(fruits.length);

//  push

const cars = ['volvo', 'bmw', 'baleno', 'swift'];
cars.push('duster');
console.log(cars);

// pop

const cars2 = ['volvo', 'bmw', 'baleno', 'swift'];
cars2.pop('swift');
console.log(cars2);

// slice

const animal = ['ant', 'camel', 'duck', 'elephant'];
console.log(animal.slice(2,3));

// splice

const months = ['jan', 'mar', 'april', 'may'];
months.splice(1,1,'feb');
console.log(months);

// concat

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

// fill

let arr4 = [1, 2, 3, 4];
console.log(arr4.fill(0, 2, 4));

// includes

let array5 = ['cat', 'dog', 'cow'];
console.log(array5.includes('cat'));

// indexOf

let array6 = ['joe', 1, 2, 3];
console.log(array6.indexOf(4));

// isArray

let array7 = [4, 5, 6, 7];
console.log(Array.isArray(array7));

// join

let array8 = [1, 2, 3, 4];
console.log(array8.join(5));

// lastindexOf

const animals = ['dodo', 'tiger', 'dodo'];
console.log(animals.lastIndexOf('dodo'));