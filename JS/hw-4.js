//1
let i = 0;
while (i<2) {
    console.log ("Привет");
    i++;
}

//2
let a = '';
for (let c = 1; c <=5; c++){
    a = a + c + ' ';
}
console.log(a);

//3
let b = '';
for (let z = 7; z <=22; z++){
    b = b + z + ' ';
}
console.log(b);

//4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
};
for(let salary in obj){
    console.log(`${salary} — зарплата ${obj[salary]} долларов.`);
}

//5
let n = 1000;
let num = 0;
while (n / 2 >= 50) {
    n = n / 2;
    console.log (n);
    num++;
}
console.log(num);

//6
const month = 31;
for (let friday = 5; friday < month; friday+=7) {
    console.log (`Сегодня пятница, ${friday} число. Необходимо подготовить отчет.`);
}