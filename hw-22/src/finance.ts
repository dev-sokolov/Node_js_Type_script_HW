// Задание 2
// Пространства имен для финансовых операций
// Создайте файл `finance.ts`, в котором определите пространство имен `Finance`.
// Внутри него создайте классы:
// `LoanCalculator`, который рассчитывает ежемесячные платежи по кредиту по формуле аннуитета.
// `TaxCalculator`, который рассчитывает налог на доход.
// Используйте эти классы в файле `main.ts` для расчета платежей по кредиту и налога на примерных данных.

namespace Finance {
  export class LoanCalculator {
     static calculateMonthlyPayment(
      principal: number,
      annualRate: number,
      months: number
    ): number {
      const monthlyRate = annualRate / 12 / 100;
      return (
        (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))
      );
    }
  }

  export class TaxCalculator {
    static getTax(income: number, taxRate: number): number {
      return (income * taxRate) / 100;
    }
  }
}

console.log("Задание 2");

const loanCalculator = Finance.LoanCalculator.calculateMonthlyPayment(5000, 7, 60);
console.log(loanCalculator.toFixed(2));

console.log(Finance.TaxCalculator.getTax(1000, 30));


