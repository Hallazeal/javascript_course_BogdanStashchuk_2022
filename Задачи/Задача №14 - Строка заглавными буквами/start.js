/** ЗАДАЧА - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь, что значение этой переменной НЕ является экземпляром класса String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь, что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и её значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. выведите в консоль значение второй переменной
 */

const myFavoriteSeason = "winter";

console.log(myFavoriteSeason instanceof String);

console.log(typeof myFavoriteSeason);

const seasonToUpperCase = myFavoriteSeason.toUpperCase();

console.log(seasonToUpperCase);

// СОЗДАНИЕ ЭКЗЕМПЛЯРА String

const myString = new String("Nikita");

console.log(myString instanceof String);

console.log(typeof myString);

console.log(myString.toUpperCase());
