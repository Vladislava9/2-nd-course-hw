// //1
// console.log("friend".toUpperCase());

// //2
// function searchStart(arr, str) {
//     const array = [];
//     for(el of arr) {
//         if(el.toLowerCase().startsWith(str.toLowerCase())){
//             array.push(el.toLowerCase());
//         }
//     }
//     return array;
// }
// console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

// //3
// console.log(Math.floor(32.58884));
// console.log(Math.ceil(32.58884));
// console.log(Math.round(32.58884)); 

// //4
// const arr = [52, 53, 49, 77, 21, 32];
// const min = Math.min(...arr);
// const max = Math.max(...arr);

// console.log(min, max); 

// //5

// let getRandomInt = (minValue, maxValue) => {return Math.round(Math.random() * maxValue)};

// console.log(getRandomInt(1, 10));

// //6
// function getRandomArrNumbers(a) {
//     const arr = [];
//     for(i = 0; i < Math.floor(a / 2); i++) {
//         arr.push(Math.floor(Math.random() * a));
//     }
//     return arr;
// }
// console.log(getRandomArrNumbers(7));

//7
// let getRandomIntNumb = (b, c) => {return Math.round(Math.random() * (c - b) + b)};
// console.log(getRandomIntNumb(2, 8));

//8
// let myDate = new Date();
// console.log(myDate);

//9
// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);

//10
function changeDateAndTime () {

let newDate = new Date();
    let time = { 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric' 
    }; 
    let options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
    } 
    let weekday = {  
        weekday: 'long' 
    } 

    let fullDate = newDate.toLocaleString('ru', options) + ' - ' + 'это ' + newDate.toLocaleString('ru', weekday);
    let fullTime = newDate.toLocaleString('ru', time);
    console.log(fullDate); 
    console.log(fullTime);
}
changeDateAndTime ();

