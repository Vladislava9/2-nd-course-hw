/*1
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}

//2
const arr = [1, 5, 4, 10, 0, 3];
console.log(arr.indexOf(4)); 

//3
let numbs = [1, 3, 5, 10, 20];
numbs = numbs.join(' ');
console.log(numbs); 

//4
let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i].push(1);
    }
}
console.log(arr);

//5
const arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr); 

//6
let array = [9, 8, 7, 'a', 6, 5];
array = array.sort();
array.pop();

console.log(array); 

//7
const arr = [9, 8, 7, 6, 5];
let userNumber = +prompt('Попробуйте угадать число, которое мы загадали');

let result = arr.find(el => el === userNumber) ? alert('Угадал') : alert('Не угадал');

//8
let string = 'abcdef';
let result = string.split('').reverse().join('');
console.log(result); 

//9
let arr = [[1, 2, 3,],[4, 5, 6]];
let result = arr.reduce(function(a,b) {
    return a.concat(b);
});
console.log(result); 

//10
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length - 1; i++) {
    let result = arr[i] + arr[i + 1];
    console.log(result); 
}

//11
const squareNumbers = (numbs) => numbs.map(el => el**2);

console.log(squareNumbers([1, 2, 3, 8])); 

//12
const getLengthWords = (arr) => arr.map(el => el.length);
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква'])); 

//13
const filterPositive = (arr) => arr.filter(el => el < 0);

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2])); 

//14
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(Math.floor(Math.random() * 10));
}
console.log(`Исходный массив: ${arr}, массив с четными числами: ${arr.filter(el => el % 2 === 0)}`);*/

//15
let arr = [];
for (let i = 1; i <= 6; i++) {
    arr.push(Math.floor(Math.random() * 10));
}
const sum = arr.reduce((a, b) => a + b, 0);
const avg = (sum / arr.length);
console.log(`Исходный массив: ${arr}, среднее арифметическое: ${avg}`);