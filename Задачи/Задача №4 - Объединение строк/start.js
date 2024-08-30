/** ЗАДАЧА - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 * - ваше имя
 * - ваша фамилия
 * - ваша профессия
 *
 * 2. Создайте ещё одну переменную. Её значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = "Nikita";
const mySurname = "Danilov";
const myProfession = "Frontend Developer";

// Способ 1 - Конкатенация
const personInfo1 =
  "My name is " + myName + " " + mySurname + " and I am " + myProfession;

console.log(personInfo1);

// Способ 2 - Шаблонные строки (обратные кавычки)
const personInfo2 = `My name is ${myName} ${mySurname} and I am ${myProfession}`;
console.log(personInfo2);
