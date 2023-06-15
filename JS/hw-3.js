//1
let password = 'пароль';
let userPassword = prompt ('Введите пароль');

if (userPassword === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

//2
let c = Number(prompt('Введите число'));

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//3
let d = prompt ('Введите число');
let e = prompt ('Введите число');

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//4
let a = '2';
let b = '3';

alert(Number(a) + Number(b));

//5
let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case 12:
    case 1:
    case 2: 
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Такого месяца не существует');
        break;
}

