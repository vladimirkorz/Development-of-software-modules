// Задания по JavaScript

// --------------------------Задания на работу со строками------------------------------

// 1. Напиши функцию capitalizeFirstLetter(str), которая принимает строку и
// возвращает её с заглавной первой буквой (остальные буквы не менять).
// Например, "привет" -> "Привет".

console.log('-----Задания на работу со строками-----')

function capitalizeFirstLetter(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("привет")); 

// 2. Напиши функцию reverseString(str), которая возвращает строку в
// обратном порядке. Например, "abc" -> "cba".

function reverseString(str) {
    return str. split('').reverse().join('');
}

console.log(reverseString("abc"));   

// 3. Напиши функцию countVowels(str), которая подсчитывает количество
// гласных букв (a, e, i, o, u) в строке (регистронезависимо). Например, "Hello" -
// > 2.

function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

console.log(countVowels("Hello"));

// 4. Напиши функцию truncateText(str, maxLength), которая обрезает
// строку до указанной длины и добавляет многоточие, если она была
// длиннее. Например, "Очень длинная строка", 10 -> "Очень длин...".

function truncateText(str, maxLength) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...'
}

console.log(truncateText("Очень длинная строка", 10));

// 5. Напиши функцию removeSpaces(str), которая удаляет все пробелы из
// строки. Например, "a b c" -> "abc".


function removeSpaces(str) {
    return str.replace(/\s/g, '')
}

console.log(removeSpaces("a b c")); 

// ----------------------Задания на работу с массивами--------------------------------

// 1. Напиши функцию sumArray(arr), которая возвращает сумму всех
// чисел в массиве. Например, [1, 2, 3] -> 6.

console.log('-----Задания на работу с массивами-----');

function sumArray(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumArray([1, 2, 3]));

// 2. Напиши функцию filterEvenNumbers(arr), которая возвращает новый
// массив, содержащий только чётные числа из исходного. Например, [1, 2, 3,
// 4] -> [2, 4].

function filterEvenNumbers(arr) {
  const result = [];
  for (const num of arr) {
    if (num % 2 === 0) result.push(num);
  }
  return result;
}

console.log(filterEvenNumbers([1, 2, 3, 4]));

// 3. Напиши функцию findMax(arr), которая находит и возвращает
// максимальное число в массиве. Гарантируется, что массив не пустой и
// содержит только числа.

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

console.log(findMax([3, 7, 2, 9, 5]));

// 4. Напиши функцию flattenArray(arr), которая «расплющивает» массив
// на один уровень. Например, [[1, 2], [3, [4]]] -> [1, 2, 3, [4]] (только первый
// уровень вложенности).

function flattenArray(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const sub of item) {
        result.push(sub);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flattenArray([[1, 2], [3, [4]]]));

// 5. Напиши функцию uniqueValues(arr), которая возвращает массив
// уникальных значений, сохраняя порядок первого появления. Например, [1,
// 2, 2, 3, 1] -> [1, 2, 3].

function uniqueValues(arr) {
  const result = [];
  const seen = new Set();
  for (const item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }
  return result;
}

console.log(uniqueValues([1, 2, 2, 3, 1]));

// ----------------------Задания на работу с циклами--------------------------------

// 1. Напиши функцию printNumbers(n), которая выводит в консоль все
// числа от 1 до n включительно с помощью цикла.

console.log('-----Задания на работу с циклами-----');

function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(6);

// 2. Напиши функцию calculateFactorial(n), которая вычисляет факториал
// числа n с помощью цикла (например, 5! = 1 * 2 * 3 * 4 * 5).

function calculateFactorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(calculateFactorial(4));

// 3. Напиши функцию generateMultiplicationTable(n), которая с помощью
// вложенных циклов выводит таблицу умножения для числа n от 1 до 10.
// Каждая строка — это n * i = результат.

function generateMultiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

generateMultiplicationTable(3);

// 4. Напиши функцию sumOfDigits(num), которая считает сумму цифр
// числа с помощью цикла. Например, 123 -> 1 + 2 + 3 = 6. Число может быть
// положительным.

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;  // берём последнюю цифру
    num = Math.floor(num / 10);  // отбрасываем её
  }
  return sum;
}

console.log(sumOfDigits(2345));

// 5. Напиши функцию repeatString(str, count), которая повторяет строку
// count раз и возвращает результат (без использования встроенного метода
// repeat). Например, "ab", 3 -> "ababab".

function repeatString(str, count) {
  let result = '';
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
}

console.log(repeatString("ab", 3));
