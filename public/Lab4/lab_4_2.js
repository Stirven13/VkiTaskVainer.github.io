// 1.1
function* randomGenerator(n, m) {
    while (true) {
        yield Math.floor(Math.random() * (m - n + 1)) + n;
    }
}

const randomGen = randomGenerator(1, 100);

for (let i = 0; i < 10; i++) {
    let randomNumber = randomGen.next().value;
    console.log(randomNumber);
}



// 1.2
function* padovanaGenerator() {
    let nums = [1, 1, 1];
    let currentIndex = 3;

    while (true) {
        let nextPadovanNumber = nums[nums.length - 2] + nums[nums.length - 3];
        nums.push(nextPadovanNumber);
        yield nextPadovanNumber;
        currentIndex++;
    }
}

const padovanaGen = padovanaGenerator();
for (let i = 0; i < 22; i++) {
    console.log(padovanaGen.next().value);
}
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,  19,  20,  21,  22
// 1, 1, 1, 2, 2, 3, 4, 5, 7,  9, 12, 16, 21, 28, 37, 49, 65, 86, 114, 151, 200, 265



// 1.3
function* primeGenerator() {
    let primes = [2];
    yield 2;
    
    let candidate = 3;
    
    while (true) {
        let isPrime = true;
        for (let prime of primes) {
            if (prime * prime > candidate) break;
            if (candidate % prime === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            primes.push(candidate); 
            yield candidate;
        }
        
        candidate += 2; 
    }
}

const primeGen = primeGenerator();
for (let i = 0; i < 10; i++) {
    console.log(primeGen.next().value);
}



// 2.1
function countLetters(str) {
    const letterMap = new Map();
    const cleanedStr = str.toLowerCase().replace(/\s/g, '');

    for (const char of cleanedStr) {
        if (letterMap.has(char)) {
            letterMap.set(char, letterMap.get(char) + 1);
        } else {
            letterMap.set(char, 1);
        }
    }

    return letterMap;
}

const inputString = "Hello, World!";
const letterCountMap = countLetters(inputString);

letterCountMap.forEach((count, letter) => {
    console.log(`Буква "${letter}" встречается ${count} раз.`);
});



// 2.2
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function getPrime(n) {
    if (n === 1) return BigInt(2);

    let count = 1;
    let num = 3;

    while (count < n) {
        if (isPrime(num)) {
            count++;
        }
        if (count < n) {
            num += 2;
        }
    }

    return BigInt(num);
}

const n = 100;
const primeNumber = getPrime(n);
console.log(`#${n} простое число: ${primeNumber}`);
