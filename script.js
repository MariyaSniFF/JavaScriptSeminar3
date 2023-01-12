// 1. Создайте функцию которая возводит переданное число в куб,
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

let number = Number(prompt(`Введите число`));
function GetQube(number) {
  return number * number * number;
}
alert(GetQube(number));
console.log(GetQube(2));
console.log(GetQube(3));

// 2. Пользователь вводит с клавиатуры число, если ввёл текст,
// необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст
// "Размер заработной платы за вычетом налогов равен значение"

let salary = Number(prompt(`Введите размер заработной платы`));
let tax = 13;

function TestNumber(salary) {
  if (isNaN(salary)) {
    return "Введите число!";
  } else {
    return salary;
  }
}

console.log(TestNumber(salary));

function GetOffTax(salary) {
  return salary - (salary / 100) * tax;
}
console.log(
  "Размер заработной платы за вычетом налогов равен " + GetOffTax(salary)
);

// 3. Пользователь с клавиатуры вводит 3 числа,
// необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let firstNum = Number(prompt(`Введите первое число`));
let secondNum = Number(prompt(`Введите второе число`));
let thirdNum = Number(prompt(`Введите третье число`));

function GetMaximum(firstNum, secondNum, thirdNum) {
  let max = 0;
  if (firstNum >= secondNum && firstNum >= thirdNum) {
    max = firstNum;
  } else if (secondNum >= firstNum && (secondNum = thirdNum)) {
    max = secondNum;
  } else {
    max = thirdNum;
  }
  return max;
}
alert(GetMaximum(firstNum, secondNum, thirdNum));

// 4. Необходимо реализовать четыре функции, каждая функция должна принимать по два
// числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение
// console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
// сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите
// внимание на разность, функция должна вычесть из большего числа меньшее, либо
// вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
// не нужно.

let a = Number(prompt(`Введите число a: `));
let b = Number(prompt(`Введите число b: `));

function Summa(a, b) {
  return a + b;
}

function Difference(a, b) {
  if (a > b) {
    return a - b;
  }
  return b - a;
}

function Multiplication(a, b) {
  return a * b;
}

function Division(a, b) {
  return a / b;
}

alert(`Сумма чисел a и b: ${Summa(a, b)}`);
alert(`Разность чисел a и b: ${Difference(a, b)}`);
alert(`Произведение чисел a и b: ${Multiplication(a, b)}`);
alert(`Частное чисел a и b: ${Division(a, b)}`);
