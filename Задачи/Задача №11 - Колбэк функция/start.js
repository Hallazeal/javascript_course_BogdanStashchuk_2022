/** ЗАДАЧА - Колбэк функция (функция, которая вызывается внутри другой функции)
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 *
 */

setTimeout(() => console.log("Привет, мир!"), 5000);

// Можно создать функцию заранее, затем передать только название функции
const helloWorld = () => console.log("Привет, мир!");

setTimeout(helloWorld, 5000);
