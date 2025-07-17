// Задание 1
// Обработка цепочки промисов с `async/await`
// Создайте несколько функций, которые возвращают промисы с разным временем выполнения.
// Напишите функцию, которая вызывает эти промисы поочерёдно, используя `await`, и обрабатывает результаты каждой операции.
// Убедитесь, что цепочка промисов выполняется последовательно.

const message1 = () => {
    const data = new Promise((resolve) => {
        setTimeout(() => {
            resolve("message 1")
        }, 1000)
    })
    return data;
};

const message2 = () => {
    const data = new Promise((resolve) => {
        setTimeout(() => {
            resolve("message 2")
        }, 1500)
    })
    return data;
};

const message3 = () => {
    const data = new Promise((resolve) => {
        setTimeout(() => {
            resolve("message 3")
        }, 2000)
    })
    return data;
};

const genFunc = async () => {
    console.log(await message1());
    console.log(await message2());
    console.log(await message3());
}

genFunc();


// Задание 2
// Асинхронная обработка данных из массива
// Напишите функцию, которая принимает массив строк.
// Каждая строка будет асинхронно обрабатываться (например, преобразовываться в верхний регистр с задержкой).
// Используйте `Promise.all` для выполнения всех операций параллельно и вывода всех результатов.

const makeUpperCase = (str) => {
    const stringHandler = new Promise((resolve) => {
        setTimeout(() => {
            resolve(str.toUpperCase())
        }, 2500)
    })
    return stringHandler;
}

const processArray = async (arr) => {
    const upperCaseArr = arr.map(str => makeUpperCase(str))
    const result = await Promise.all(upperCaseArr);
    return result;
}

const arrHandler = async () => {
    const result = await processArray(["one", "two", "three"]);
    console.log(result);
}

arrHandler();

// Задание 3
// Обработка ошибки в параллельных промисах
// Напишите функцию, которая вызывает три промиса параллельно с помощью `Promise.all`.
// Один из промисов должен намеренно завершиться с ошибкой через `reject`. 
// Обработайте эту ошибку с использованием `try/catch` и выведите соответствующее сообщение.

const message4 = () => {
    const data = new Promise((resolve) => {
        setTimeout(() => {
            resolve("message 4")
        }, 3000)
    })
    return data;
};

const message5 = () => {
    const data = new Promise((resolve) => {
        setTimeout(() => {
            resolve("message 5")
        }, 3000)
    })
    return data;
};

const message6 = () => {
    const data = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("message 6 rejected"))
        }, 3000)
    })
    return data;
};

const handleMessages = async () => {
    try {
        const result = await Promise.all([message4(), message5(), message6()]);
        console.log(result);
        return;
    } catch (error) {
        console.log(error.message);
    }
}

handleMessages();

// Задание 4
// Асинхронная функция с динамическим временем выполнения
// Напишите асинхронную функцию, которая принимает массив чисел.
// Для каждого числа создайте промис, который будет завершаться через количество миллисекунд, равное значению числа.
// Используйте `Promise.all` для ожидания завершения всех промисов и вывода результатов в консоль.

const makeNumbersToPromises = async (arr) => {
    const arrPromises = arr.map(num => new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise number: ${num}`)
        }, num)
    }));

    const result = await Promise.all(arrPromises);
    console.log(result);
};

makeNumbersToPromises([2, 4, 6]);













