// Задание 1
// Типизация функции с несколькими параметрами
// Напишите функцию `calculateTotal`, которая принимает три параметра:
// `price` (число)
// `quantity` (число)
// `discount` (число, по умолчанию равен 0)
// Функция должна возвращать общую стоимость товаров с учетом скидки. Если скидка не указана, она считается равной нулю.

const calculateTotal = (
  price: number,
  quantity: number,
  discount: number = 0
): number => {
  return price * quantity - discount;
};

console.log("Задание 1");
console.log(calculateTotal(50, 3, 10));
console.log(calculateTotal(50, 3));

// Задание 2
// Использование Union типов
// Создайте переменную `id`, которая может быть либо строкой, либо числом.
// Напишите функцию `displayId`, которая принимает эту переменную и выводит сообщение, содержащее значение ID. Если `id` — строка, выведите её в верхнем регистре. Если `id` — число, умножьте его на 10 перед выводом.

type Id = string | number;

const displayId = (id: Id): void => {
  if (typeof id === "string") console.log(id.toUpperCase());
  if (typeof id === "number") console.log(id * 10);
};

console.log("Задание 2");
displayId("text");
displayId(12);

// Задание 3
// Объявление и типизация массивов объектов
// Создайте массив объектов `orders`, где каждый объект описывает заказ и содержит следующие свойства:
// `orderId` (строка)
// `amount` (число)
// `status` (строка, может принимать значения "pending", "shipped" или "delivered")
// Напишите функцию `filterOrdersByStatus`, которая принимает этот массив и строку `status`, и возвращает массив заказов, соответствующих указанному статусу.

type OrderStatus = "pending" | "shipped" | "delivered";

interface IOrders {
  orderId: string;
  amount: number;
  status: OrderStatus;
}

const orders: IOrders[] = [
  {
    orderId: "123A",
    amount: 5,
    status: "pending",
  },
  {
    orderId: "127B",
    amount: 7,
    status: "shipped",
  },
  {
    orderId: "129C",
    amount: 9,
    status: "delivered",
  },
];

const filterOrdersByStatus = (arr: IOrders[], status: OrderStatus): IOrders[] => {
  const filtredArr = arr.filter((order) => order.status === status);
  return filtredArr;
};

console.log("Задание 3");
console.log(filterOrdersByStatus(orders, "delivered"));

// Задание 4
// Работа с кортежами и объектами
// Создайте кортеж `productInfo`, который содержит:
// название товара (строка)
// его цену (число)
// количество на складе (число)
// Напишите функцию `updateStock`, которая принимает объект `inventory` (где ключ — это название товара, а значение — количество на складе) и кортеж `productInfo`, обновляет количество товара в объекте `inventory` и возвращает обновленный объект.

type ProductInfo = [string, number, number]; 

function updateStock(
  inventory: { [key: string]: number },
  productInfo: ProductInfo
): { [key: string]: number } {
  const [productName, , quantity] = productInfo;
  inventory[productName] = (inventory[productName] || 0) + quantity;
  return inventory;
}

let warehouse = {
  "Телефон": 5,
  "Ноутбук": 2
};

const newProduct: ProductInfo = ["Телефон", 10000, 3];

console.log("Задание 4");
console.log(updateStock(warehouse, newProduct));

