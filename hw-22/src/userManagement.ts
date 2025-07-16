// Задание 3
// Вложенные пространства имен для управления пользователями
// Создайте файл `userManagement.ts`, в котором определите пространство имен `UserManagement`.
// Внутри него создайте вложенное пространство имен `Admin`. Внутри `Admin` создайте класс `AdminUser`, который будет иметь свойства для имени, email и прав доступа (например, `isSuperAdmin`).
// Также создайте методы для изменения прав доступа.
// Используйте этот класс в файле `main.ts` для создания администратора и изменения его прав.

namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      name: string;
      email: string;
      isSuperAdmin: boolean = false;

      constructor(name: string, email: string, isSuperAdmin: boolean = false) {
        this.name = name;
        this.email = email;
        this.isSuperAdmin = isSuperAdmin;
      }
      toggleAccess() {
        this.isSuperAdmin = !this.isSuperAdmin;
      }
    }
  }
}

const ruslan = new UserManagement.Admin.AdminUser(
  "Ruslan",
  "ruslan@gmail.com",
  true
);

console.log("Задание 3");

console.log(ruslan);
ruslan.toggleAccess();
console.log(ruslan.isSuperAdmin);
