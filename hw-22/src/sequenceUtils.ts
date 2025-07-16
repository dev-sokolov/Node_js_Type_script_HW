// Задание 4
// Модули для работы с числовыми последовательностями
// Создайте файл `sequenceUtils.ts`, в котором определите функции:
// `generateFibonacci`, которая генерирует последовательность Фибоначчи до указанного числа.
// `generatePrimeNumbers`, которая генерирует простые числа до указанного числа.
// В файле `main.ts` импортируйте эти функции и протестируйте их на примерах.

export function generateFibonacci(limit: number): number[] {
    const result: number[] = [0, 1];
    while (true) {
        const next = result[result.length - 1] + result[result.length - 2];
        if (next > limit) break;
        result.push(next);
    }
    return result;
}

export function generatePrimeNumbers(limit: number): number[] {
    const primes: number[] = [];
    for (let i = 2; i <= limit; i++) {
        if (primes.every(p => i % p !== 0)) {
            primes.push(i);
        }
    }
    return primes;
}