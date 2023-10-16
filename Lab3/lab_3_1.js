// 1
var admin;
var name;

name = "Джон";
admin = name;

alert(admin);



// 2
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

let result = parseInt(a) + parseInt(b);

alert(result);



// 3
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}



// 4
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}



// 5
let number;

while (true) {
  number = prompt("Введите число, большее 100:", "");

  if (number === null) {
    alert("Ввод отменен.");
    break;
  }

  number = Number(number); 

  if (isNaN(number)) {
    alert("Пожалуйста, введите число.");
  } else if (number > 100) {
    break;
  } else {
    alert("Введите число больше 100.");
  }
}



// 6
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function printPrimesInRange(n) {
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  let n = 10; 
  printPrimesInRange(n);