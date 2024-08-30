/** ЗАДАЧА - Что будет выведено в консоли
 *
 * Что будет выведено в консоли?
 */

function fn() {
  console.log("Привет из функции fn");

  return function (a) {
    console.log(a);
  };
}

fn()(true);
