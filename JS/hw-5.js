//1
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(8, 4));
console.log(min(6, 6));

//2
function evenNumber (c) {
    if (c % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(evenNumber(8));

//3.1
function squareNumber (n) {
    console.log(n**2);
}

squareNumber (6);

//3.2
function squareNumber2 (n) {
   return n**2;
}

console.log(squareNumber(45));

//4
function checkAge (age) {
    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        console.log('Привет, друг!');
    } else {
        console.log('Добро пожаловать!');
    }
}

checkAge(prompt('Укажите Ваш возраст'));

//5

function checkNumber (a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.log('Одно или оба значения не являются числом');
    } else {
        return a * b;
    }
}

console.log(checkNumber('esdg', 5));
console.log(checkNumber(12, 5));

//6

function cubeNumber (n){
    if (isNaN(n)) {
        console.log ('Переданный параметр не является числом');
    } else {
        let result = n ** 3;
        return `${n} в кубе равняется ${result}`;
    }
}

cubeNumber(prompt('Укажите число'));

console.log(cubeNumber(9));

//7

const circle1 = {
    radius: 8,
    getArea() {
      return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  const circle2 = {
    radius: 15,
    getArea() {
      return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  };