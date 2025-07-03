// Задание 1
// Объединение и пересечение типов
// Создайте два типа: `Admin` и `User`.
// Тип `Admin` должен включать поля `name` (строка) и `permissions` (массив строк), а тип `User` должен включать поля `name` (строка) и `email` (строка).
// Создайте тип `AdminUser`, который объединяет свойства обоих типов, и создайте объект этого типа.

type Admin = {
  name: string;
  permition: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const admin = {
  name: "Ruslan",
  email: "ruslan@gmail.com",
  permition: ["/dashboard", "/admin", "/customers"],
};

console.log("Задание 1");
console.log(admin);

// Задание 2
// Вложенные объекты и опциональные поля
// Создайте объект `Car` с полями `make` (строка), `model` (строка), и вложенным объектом `engine`, который имеет поля `type` (строка) и `horsepower` (число).
// Добавьте опциональное поле `year` (число) для года выпуска машины.
// Напишите функцию, которая выводит информацию о машине.

interface Engine {
  type: string;
  horsepower: number;
}

interface Car {
  make: string;
  model: string;
  engine: Engine;
  year?: number;
}

const car: Car = {
  make: "toyota",
  model: "Camry",
  engine: {
    type: "v6",
    horsepower: 200,
  },
  year: 2020,
};

const printCarInfo = (car: Car): void => {
  console.log(
    `make: ${car.make},
     model: ${car.model},
     engine: {
      type: ${car.engine.type},
      horsepower: ${car.engine.horsepower},
     },
     year: ${car.year}`
  );
};

console.log("Задание 2");
printCarInfo(car);

// Задание 3
// Интерфейс для функции с объектом
// Создайте интерфейс для функции `calculateDiscount`, которая принимает объект `Product` с полями `name` (строка) и `price` (число), а также параметр `discount` (число).
// Функция должна возвращать новую цену продукта с учетом скидки.

interface Product {
  name: string;
  price: number;
}

interface DiscountPrice {
  (product: Product, dicsount: number): number;
}

const product: Product = {
  name: "Samsung x100",
  price: 1000,
};

const calculateDiscount: DiscountPrice = (product, discount) => {
  const newPrice = product.price - discount;
  return newPrice;
};

console.log("Задание 3");
console.log(calculateDiscount(product, 100));

// Задание 4
// Массив объектов и функции
// Создайте интерфейс `Employee`, который включает поля `name` (строка) и `salary` (число).
// Создайте массив объектов `Employee`, затем напишите функцию, которая принимает этот массив и возвращает массив зарплат всех сотрудников.

interface Employee {
  name: string;
  salary: number;
}

const employees: Employee[] = [
  {
    name: "Олег",
    salary: 5000,
  },
  {
    name: "Глеб",
    salary: 4500,
  },
  {
    name: "Иван",
    salary: 5500,
  },
];

const printSalaries = (employees: Employee[]): number[] => {
  const salaries = employees.map((employee: Employee) => employee.salary);
  return salaries;
};

console.log("Задание 4");
console.log(printSalaries(employees));

// Задание 5
// Наследование интерфейсов и работа с объектами
// Создайте интерфейс `Person` с полями `firstName` (строка) и `lastName` (строка).
// Создайте интерфейс `Student`, который наследует `Person` и добавляет поле `grade` (число).
// Создайте объект `student` этого типа и напишите функцию, которая выводит полное имя студента и его оценку.

interface Person {
    firstName: string,
    lastName: string
}

interface Student extends Person {
    grade: number
}

const student: Student = {
    firstName: "Руслан",
    lastName: "Соколов", 
    grade: 100
}

const printStudent = (student: Student): void => {
    console.log(`Student: ${student.firstName} ${student.lastName}. Grade: ${student.grade}`);
}

console.log("Задание 5");
printStudent(student);

// Задание 6
// Интерфейс для функции с несколькими параметрами
// Создайте интерфейс для функции `concatStrings`, которая принимает два параметра: `str1` и `str2` (оба строки) и возвращает их объединение.
// Реализуйте эту функцию и протестируйте её.

interface ConcatStrings {
    (str1: string, str2: string): string;
}

const concatStrings: ConcatStrings = (str1, str2) => {
    return str1 + str2
}

console.log("Задание 6");
console.log(concatStrings("Hello", "World"));
