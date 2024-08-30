/** ЗАДАЧА - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 * - name
 * - surname
 * - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

// Можно сократить строку, если добавить деструктуризацию объекта
const person = {
  name: "Nikita",
  surname: "Danilov",
  favoriteNumber: 3,
};

const personInfo = `My name is ${person.name} ${person.surname} and my favorite number is ${person.favoriteNumber}`;

console.log(personInfo);
