function getSeason() {
    const monthNumber = +prompt("Укажите номер месяца");
    if (isNaN(monthNumber)) {
        alert('Вы ввели что-то не то');
    } else if (monthNumber >= 1 && monthNumber <=2 || monthNumber === 12) {
            alert('Зима');
    } else if (monthNumber >= 3 && monthNumber <= 5) {
            alert('Весна');
    } else if (monthNumber >= 6 && monthNumber <= 8) {
            alert('Лето');
    } else if (monthNumber >= 9 && monthNumber <= 11) {
            alert('Осень');
    } else {
            alert('Такого месяца не существует');
    }
    }
   
function guessTheFruit() {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arr = arr.sort(() => Math.random() - 0.5);
    alert(arr);

    let firstUserAnswer = prompt('Чему равнялся первый элемент массива?');
    let secondUserAnswer = prompt('Чему равнялся последний элемент массива?');

    if (firstUserAnswer.toLowerCase() === arr[0].toLowerCase() && secondUserAnswer.toLowerCase() === arr[arr.length - 1].toLowerCase()) {
        alert("Поздравляем, Вы угадали оба элемента массива!");
    } else if (firstUserAnswer.toLowerCase() === arr[0].toLowerCase() || secondUserAnswer.toLowerCase() === arr[arr.length - 1].toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert ("Вы ответили неверно!");
    }
    }
    