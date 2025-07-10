// Задание 1
// Абстрактный класс Animal
// Создайте абстрактный класс `Animal` с абстрактным методом `makeSound()`.
// Затем создайте классы `Dog` и `Cat`, которые наследуют `Animal` и реализуют метод `makeSound()` по-своему (`Dog` должен возвращать "Bark", а `Cat` — "Meow").
// Создайте массив типа `Animal[]`, включающий объекты `Dog` и `Cat`, и вызовите метод `makeSound()` для каждого элемента массива.

abstract class Animal {
  abstract makeSound(): string;
}

class Dog extends Animal {
  makeSound(): string {
    return "Bark";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Meow";
  }
}

console.log("Задание 1");

const arr: Animal[] = [new Dog(), new Cat()];

arr.forEach((animal) => console.log(animal.makeSound()));

// Задание 2
// Абстрактный класс Shape с цветом
// Создайте абстрактный класс `ColoredShape`, который наследует `Shape` (из задания 4 на уроке) и добавляет абстрактное поле `color`.
// Реализуйте классы `ColoredCircle` и `ColoredRectangle`, которые наследуют `ColoredShape`, задают `color` и реализуют метод `calculateArea()`.
// Выведите площадь и цвет для каждого объекта.

abstract class Shape {
  abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  radius: number;
  color: string;

  constructor(radius: number, color: string) {
    super();
    this.radius = radius;
    this.color = color;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

class ColoredRectangle extends ColoredShape {
  width: number;
  height: number;
  color: string;

  constructor(width: number, height: number, color: string) {
    super();
    this.width = width;
    this.height = height;
    this.color = color;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

console.log("Задание 2");

const circle = new ColoredCircle(15, "red");
console.log(circle.color);
console.log(circle.calculateArea());

const rectangle = new ColoredRectangle(15, 20, "green");
console.log(rectangle.color);
console.log(rectangle.calculateArea());

// Задание 3
// Абстрактный класс Appliance
// Создайте абстрактный класс `Appliance` с абстрактными методами `turnOn()` и `turnOff()`.
// Затем создайте классы `WashingMachine` и `Refrigerator`, которые наследуют `Appliance` и реализуют методы `turnOn()` и `turnOff()`, выводя соответствующие сообщения.
// Создайте массив типа `Appliance[]`, добавьте в него объекты `WashingMachine` и `Refrigerator`, и вызовите методы `turnOn()` и `turnOff()` для каждого элемента.

abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  turnOn(): void {
    console.log("WashingMachine works");
  }

  turnOff(): void {
    console.log("WashingMachine doesn't work");
  }
}

class Refrigerator extends Appliance {
  turnOn(): void {
    console.log("Refrigerator works");
  }

  turnOff(): void {
    console.log("Refrigerator doesn't work");
  }
}

console.log("Задание 3");

const arrAppliances: Appliance[] = [new WashingMachine(), new Refrigerator()];

arrAppliances.forEach((appliance) => {
  appliance.turnOn();
  appliance.turnOff();
});

// Задание 4
// Абстрактный класс Account
// Создайте абстрактный класс `Account` с абстрактными методами `deposit(amount: number)` и `withdraw(amount: number)`.
// Реализуйте классы `SavingsAccount` и `CheckingAccount`, которые наследуют `Account`.
// В классе `SavingsAccount` добавьте логику для начисления процентов на остаток.
// В классе `CheckingAccount` реализуйте снятие средств с учетом комиссии.
// Проверьте работу методов на объектах обоих классов.

abstract class Account {
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  private balance: number = 0;
  private interestRate: number = 0.05;

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Текущий балланс: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("На счету не достаточно денег");
    }
    this.balance -= amount;
    console.log(`Текущий балланс: ${this.balance}`);
  }

  applyInterest(): void {
    const interest = this.balance * this.interestRate;
    this.balance += interest;
    console.log(
      `Начисление процентов: ${interest}. Текущий балланс: ${this.balance}`
    );
  }
}

class CheckingAccount extends Account {
  private balance: number = 0;
  private fee: number = 1;

  deposit(amount: number): void {
    this.balance = this.balance + amount;
    console.log(`Текущий балланс: ${this.balance}`);
  }

  withdraw(amount: number): void {
    const total = amount + this.fee;
    if (total > this.balance) {
      console.log("На счету не достаточно денег с учетом комиссии");
    } else {
      this.balance -= total;
      console.log(
        `Снятие ${amount} (+${this.fee} комиссия), Текущий балланс: ${this.balance}`
      );
    }
  }
}

console.log("Задание 4");

const savings = new SavingsAccount();
savings.deposit(1000);
savings.applyInterest();
savings.withdraw(200);

const checking = new CheckingAccount();
checking.deposit(500);
checking.withdraw(100);

// Задание 5
// Абстрактный класс Media
// Создайте абстрактный класс `Media` с абстрактным методом `play()`.
// Затем создайте классы `Audio` и `Video`, которые наследуют `Media` и реализуют метод `play()` по-своему (например, `Audio` выводит "Playing audio", а `Video` — "Playing video").
// Создайте массив типа `Media[]`, включающий объекты `Audio` и `Video`, и вызовите метод `play()` для каждого элемента массива.

abstract class Media {
  abstract play(): void;
}

class Audio1 extends Media {
  play(): void {
    console.log("Playing audio");
  }
}

class Video extends Media {
  play(): void {
    console.log("Playing video");
  }
}

console.log("Задание 5");

const arrMedia: Media[] = [new Audio1(), new Video()];
arrMedia.forEach((media) => media.play());
