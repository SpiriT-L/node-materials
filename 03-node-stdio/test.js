// console.log('Hello, Node.js!');

// Задание 1
// const { stdin, stdout } = process;
// stdout.write('Как тебя зовут?\n');
// stdin.on('data', (data) => {
//   stdout.write('Привет, ');
//   stdout.write(data);
//   process.exit();
// });

// process.on('exit', () => stdout.write('Удачи!'));

// Buffer

const { stdin, stdout } = process;
stdin.on('data', (data) => {
  const dataStringified = data.toString();
  stdout.write('Сообщение в верхнем регистре: ');
  stdout.write(dataStringified.toUpperCase());
});
