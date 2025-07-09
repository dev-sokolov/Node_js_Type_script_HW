// Задание 1
// Напишите стрелочную функцию `sumEvenNumbers`, которая принимает массив чисел и возвращает сумму всех четных чисел.

const sumEvenNumbers = (arr: number[]): number => {
  const evenArr = arr.filter((num: number): boolean => !(num % 2));
  const result = evenArr.reduce(
    (acc: number, num: number): number => acc + num,
    0
  );
  return result;
};

const arrNumbers = [1, 2, 3, 4, 5, 6, 7];

console.log("Задание 1");
console.log(sumEvenNumbers(arrNumbers));

// Задание 2
// Определите интерфейс `StringToBooleanFunction` для функции, которая принимает строку и возвращает `boolean` (например, проверяет, является ли строка пустой). Реализуйте такую функцию.

interface StringToBooleanFunction {
  (text: string): boolean;
}

const isStringNoEmpty: StringToBooleanFunction = (text) => {
  if (text) return true;
  return false;
};

console.log("Задание 2");
console.log(isStringNoEmpty("checking"));
console.log(isStringNoEmpty(""));

// Задание 3
// Создайте тип `CompareStrings` для функции, принимающей две строки и возвращающей `boolean` (например, для проверки равенства строк). Напишите функцию, соответствующую этому типу.

type CompareStrings = {
  (text1: string, text2: string): boolean;
};

const areStringsEqual: CompareStrings = (text1, text2) => text1 === text2;

const example1 = "Лето";
const example2 = "Лето";
const example3 = "Зима";

console.log("Задание 3");
console.log(areStringsEqual(example1, example2));
console.log(areStringsEqual(example1, example3));

// Задание 4
// Напишите обобщенную функцию `getLastElement`, которая принимает массив любого типа и возвращает последний элемент этого массива.

const getLastElement = <T>(arr: T[]): T | undefined => {
  return arr[arr.length - 1];
};

const arr1 = [1, 5, 7];
const arr2 = ["one", "two", "three"];

console.log("Задание 4");
console.log(getLastElement<number>(arr1));
console.log(getLastElement<string>(arr2));

// Задание 5
// Создайте обобщенную функцию `make Triple`, которая принимает три аргумента одного типа и возвращает массив из этих трёх элементов.

const makeTriple = <T>(a: T, b: T, c: T): T[] => {
  return [a, b, c];
};

console.log("Задание 5");
console.log(makeTriple<number>(5, 6, 7));
console.log(makeTriple<string>("one", "two", "three"));
