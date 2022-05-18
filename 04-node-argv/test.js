// console.log('Hello, Node.js!');

/* Задание 1
Напишите программу, которая спрашивает у пользователя его имя, после ввода имени приветствует его, указывая имя, а затем прекращает свою работу и прощается с пользователем. */
// const { stdin, stdout } = process;
// stdout.write('Как тебя зовут?\n');
// stdin.on('data', (data) => {
//   stdout.write('Привет, ');
//   stdout.write(data);
//   process.exit();
// });

// process.on('exit', () => stdout.write('Удачи!'));

// Buffer

// const { stdin, stdout } = process;
// stdin.on('data', (data) => {
//   const dataStringified = data.toString();
//   stdout.write('Сообщение в верхнем регистре: ');
//   stdout.write(dataStringified.toUpperCase());
// });

/* Задание 2
Напишите программу, которая спрашивает у пользователя его имя, после ввода имени возвращает указанное пользователем имя наоборот и прекращает работу. */

// const { stdin, stdout } = process;
// stdout.write('Как тебя зовут?\n');
// stdin.on('data', data => {
//   const dataReverse = data.reverse();
//   stdout.write(' ')
//   stdout.write(dataReverse);
//   process.exit();
// });
//* ================================================ START NODE_ARGV ========================================================================
// console.log(process.argv.slice(2));

// получаем флаг
// const flagIndex = process.argv.indexOf('-m');
// if (flagIndex !== -1) {
//   const message = process.argv[flagIndex + 1];
//   console.log(message);
// }

// функция получения флага
// function getValue(flag) {
//   const flagIndex = process.argv.indexOf(flag);
//   return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
// }
// const message = getValue('-m');
// console.log(message)

// const protoObj = {
//   sayHi() {
//     console.log('Hi!');
//   }
// };
// const obj = {};
// obj.__proto__ = protoObj;
// obj.sayHi()

// const productionMode = process.env.PRODUCTION === "true";
// if (productionMode) {
//   console.log('Application is running in production mode');
// } else {
// console.log('Application is running in development mode')
// }

/* Задание
Напишите программу, которая просит у пользователя ввести два числа, складывает эти числа, если запускается с флагом -s, или перемножает, если запускается с флагом -m, после чего завершает свою работу. Для ввода и вывода информации используйте стандартные потоки ввода/вывода. Пример работы (пользовательский ввод начинается с >) */
const {stdin, stdout} = process;
stdout.write('Введите два числа\n');
stdin.on('data', data => {
const multiplicationMode = process.env.MULTIPLICATION === "true";
if (multiplicationMode) {
  stdout.write('data *= data ')
  // return data *= data;
} else {
  stdout.write('data += data ')
// return data += data
}

  stdout.write(' ')
  process.exit();
})
// ================================================ END NODE_ARGV ========================================================================
