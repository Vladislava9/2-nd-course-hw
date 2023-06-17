//1
let a = 10;
alert (a);
a = 20;
alert (a);

//2
let releaseFirstIphone = '2007';
alert(releaseIphone);

//3
let creatorJS = 'Брендан Эйх';
alert(creatorJS);

//4
let x = 10;
let y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

//5
let b = 2;
let result = b ** 5;
alert(result);

//6
a = 9;
b = 2;
alert(a % b);

//7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//8
let age = Number(prompt('Сколько вам лет?'));
alert(age);

//9
const user = {
    name: 'Владислава', 
    age: 23, 
    isAdmin: true
};

user['city of residence'] = 'Самара';
user.age = 27;
console.log(user);

delete user['city of residence'];

let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

//10
let userName = String(prompt('Как вас зовут?'));
alert(`Привет, ${userName} !`);
