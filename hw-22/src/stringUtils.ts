// Задание 1
// Модули для работы со строками
// Создайте файл `stringUtils.ts`, в котором определите функции:
// `capitalize`, которая делает первую букву строки заглавной.
// `reverseString`, которая переворачивает строку задом наперед.

const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const reverseString = (str: string): string => {
    return str.split("").reverse().join("");
}

console.log("Задание 1");

console.log(capitalize("house"));
console.log(reverseString("house"));
