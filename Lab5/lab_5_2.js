// 1.1
const arr = [1, 6, -1, 22, 13];

const maximum = Math.max(...arr);
const minimum = Math.min(...arr);

console.log("Максимум массива:", maximum);
console.log("Минимум массива:", minimum);



// 1.2.1
const str = "!тевирП";
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);



// 1.2.2
const userInput = prompt("Введите строку:");
const reversedString = userInput.split('').reverse().join('');
console.log("Перевернутая строка:", reversedString);



// 1.3
const arr2 = [3, 5, 8, 13, 21, 42];

const sumOfEvenSqrt = arr2.reduce((sum, num) => {
  if (num % 2 === 0) {
    sum += Math.sqrt(num);
  }
  return sum;
}, 0);

console.log("Сумма квадратных корней чётных чисел в массиве:", sumOfEvenSqrt);



// 1.4
function isAnagram(str1, str2) {
    const cleanedStr1 = str1.toLowerCase().replace(/\s/g, '');
    const cleanedStr2 = str2.toLowerCase().replace(/\s/g, '');
  
    if (cleanedStr1.length !== cleanedStr2.length) {
      return false;
    }
  
    const sortedStr1 = cleanedStr1.split('').sort().join('');
    const sortedStr2 = cleanedStr2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
}
  
console.log(isAnagram("Лунь", "нуль"));
console.log(isAnagram("Лунь", "ноль"));



// 1.5
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
    const reversedStr = cleanedStr.split('').reverse().join('');
  
    return cleanedStr === reversedStr;
}
  
console.log(isPalindrome("Не гни папин ген"));
console.log(isPalindrome("123"));



// 1.6
async function printFibonacci() {
    let a = 0;
    let b = 1;
  
    while (true) {
      console.log(a);
  
      const temp = a;
      a = b;
      b = temp + b;
  
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
}
  
printFibonacci();



// 1.7
function delay(N) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, N * 1000);
    });
  }
  
  delay(3)
    .then(() => {
      console.log("Прошло 3 секунды!");
    })
    .catch(error => {
      console.error("Произошла ошибка:", error);
    });



// 1.8
function intersect(arrA, arrB) {
    const intersection = arrA.filter(element => arrB.includes(element));
    return intersection;
  }
  
const arrA = [1, 2, 3, 4, 5];
const arrB = [3, 4, 5, 6, 7];
const result = intersect(arrA, arrB);
console.log("Пересечение массивов:", result); 



// 1.9
// Go to file lab_5_2_1_9.html



// 1.10
for(let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
}