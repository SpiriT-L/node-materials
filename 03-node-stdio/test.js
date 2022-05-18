// console.log('Hello, Node.js!');

/* Задание 1
Напишите программу, которая спрашивает у пользователя его имя, после ввода имени приветствует его, указывая имя, а затем прекращает свою работу и прощается с пользователем. */
const { stdin, stdout } = process;
stdout.write('Как тебя зовут?\n');
stdin.on('data', (data) => {
  stdout.write('Привет, ');
  stdout.write(data);
  process.exit();
});

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
stdout.write('Как тебя зовут?\n');
stdin.on('data', data => {
  const dataReverse = data.reverse();
  stdout.write(' ')
  stdout.write(dataReverse);
  process.exit();
});
