let the_hidden_number = Math.floor(Math.random()*10)+1;
let number = prompt("Отгадай число от 1 до 10");
while (the_hidden_number != number){
    if (number > the_hidden_number){
        number = prompt('меньше');
    } else if (number < the_hidden_number){
        number = prompt('больше');
    }
} 
alert("Молодец! угадал это число -" + " "+ the_hidden_number);
/* Math.floor - округление вниз. Округляет аргумент до ближайшего меньшего целого.
Пример:
Math.floor(45.95); //  45
Math.floor(-45.95); // -46

Math.random - выдает рандомные числа
Пример:
Math.random()*10)+1 - рандомное чило в диапазоне от 1 до 10 включительно(+1 нужен чтобы 10 тоже включили в диапазон)*/

