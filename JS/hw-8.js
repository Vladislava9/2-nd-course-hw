//1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 people.sort((a, b) => a.age - b.age);
 console.log(people);

//2
function isPositive(number) {
    if (number > 0) {
        return true
    }
}
function isMale(whoIS) {
    if (whoIS.gender == 'male') {
        return true;
    }    
}
    function filter(arr, ruleFunction) {
        const result = [];
      
        for (let i = 0; i < arr.length; i++) {
            if (ruleFunction(arr[i])=== true){

                result.push((arr[i]));
            } 
        }
        
        return result;
    }

console.log(filter([3, -4, 1, 9], isPositive));
const people2 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
console.log(filter(people2, isMale))

//3
// const timer = (deadline) => {
//     const interval = setInterval(() => {
//         let currentDate = new Date();
//             console.log(currentDate);
//         }, 3000);
    
//     setTimeout(() => {
//         clearInterval(interval);
//             console.log('30 секунд прошло')
//         }, deadline * 1000)
//     };
    
//     timer(30);

    //4
function delayForSecond(callback) {
    setTimeout(() => {
            if(callback) {  callback(); }
    }, 1000);
}
   
delayForSecond(function () {
    console.log('Привет, Глеб!');
})

    //5
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//             if(cb) {  cb(); }
//     }, 1000)
// }
    
// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }
//     setTimeout(() => {
//         sayHi('Глеб'); 
//     }, 2000);
// delayForSecond();