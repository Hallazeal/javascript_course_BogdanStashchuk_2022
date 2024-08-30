/** ЗАДАЧА - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 *
 */

// Как создать новый экземпляр даты
const date = new Date();
console.log(date);

// Получение текущего дня (число месяца)
const currentDay = date.getDate();
console.log(currentDay + " число месяца");

// Получение текущего порядкового номера дня недели
const currentDate = date.getDay();
console.log(currentDate + "й день недели");

// Получение текущего года
const currentFullYear = date.getFullYear();
console.log(currentFullYear + " год");

// Получение текущих часов
const currentHours = date.getHours();
console.log(currentHours + " часов");

// Получение текущих миллисекунд
const currentMilliseconds = date.getMilliseconds();
console.log(currentMilliseconds + " миллисекунд сейчас");

// Получение текущих минут
const currentMinutes = date.getMinutes();
console.log(currentMinutes + " минут");

// Получение текущего номера месяца (ПОЧЕМУ-ТО ПОКАЗЫВАЕТ НА 1 МЕНЬШЕ ТЕКУЩЕГО)
const currentMonth = date.getMonth() + 1;
console.log(currentMonth + "й месяц");

// Получение текущего номера месяца в UTC (ТАКЖЕ ПОЧЕМУ-ТО ПОКАЗЫВАЕТ НА 1 МЕНЬШЕ ТЕКУЩЕГО)
const currentUTCMonth = date.getUTCMonth() + 1;
console.log(currentUTCMonth + "й месяц");

// Получение текущих секунд
const currentSeconds = date.getSeconds();
console.log(currentSeconds + " секунд(ы)");

// Получение текущего времени в мс (считая от 1 января 1970 года)
const currentDateInMs = date.getTime();
console.log(currentDateInMs + " миллисекунд всего");

/* Возвращает разницу в минутах между датой,
   вычисленной в часовом поясе UTC, и датой,
   вычисленной в местном часовом поясе, то есть
   часовой пояс хост-системы */
const currentTimezoneOffset = date.getTimezoneOffset();
console.log("Разница = " + currentTimezoneOffset);
