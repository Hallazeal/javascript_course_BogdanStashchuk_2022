/** ЗАДАЧА - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль true, если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением
 *
 */

// // Вариант 1 конвертации строки в число
// console.log(parseInt("25"));
// console.log(parseInt(typeof parseInt("25")));

// // Вариант 2 конвертации строки в число
// console.log(+"35");
// console.log(typeof +"35");

let myVariable1 = 10;
let myVariable2 = "5";

// Моё решение

myVariable1 = Number(myVariable1);
myVariable2 = Number(myVariable2);

console.log(`Моё решение: ${myVariable1 <= myVariable2 ? true : false}`);

// Решение с урока

console.log(
  `Решение с урока: ${parseInt(myVariable1) <= parseInt(myVariable2)}`
);

// ------------------------------------------------------ //

myVariable1 = "20";
myVariable2 = 100;

// Моё решение

myVariable1 = Number(myVariable1);
myVariable2 = Number(myVariable2);

console.log(`Моё решение: ${myVariable1 <= myVariable2 ? true : false}`);

// Решение с урока

console.log(
  `Решение с урока: ${parseInt(myVariable1) <= parseInt(myVariable2)}`
);
