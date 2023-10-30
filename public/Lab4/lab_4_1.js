// 1.1
function findDifference(arr) {
    if (arr.length < 1) {
        return "Массив должен содержать минимум 1 число"
    }
    return Math.max.apply(null, arr) - Math.min.apply(null, arr);
}

let array1 = [1, 9, 3, 5, 2, 8];
console.log("Максимальная разница: " + findDifference(array1));



// 1.2
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

let array2 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = removeDuplicates(array2);
console.log("Массив без повторяющихся элементов: " + uniqueArray);



// 1.3
function filterDoneObjects(objects) {
    return objects.filter(obj => obj.isDone === true);
}

let objectsArray = [
    { id: 1, isDone: true },
    { id: 2, isDone: false },
    { id: 3, isDone: true }
];

let doneObjects = filterDoneObjects(objectsArray);
console.log("Объекты с isDone: true: " + JSON.stringify(doneObjects));



// 2.1
function findElementsGreaterThan(arr, number) {
    return arr.filter(element => element > number);
}

const result2_1 = findElementsGreaterThan([1, 4, 6, 3, 2], 2);
console.log(result2_1);



// 2.2
function flattenArray(arr) {
    let flattened = [];

    function flattenHelper(inputArray) {
        for (let element of inputArray) {
            if (Array.isArray(element)) {
                flattenHelper(element);
            } else {
                flattened.push(element);
            }
        }
    }

    flattenHelper(arr);
    return flattened;
}

const inputArray = [1, 4, [34, 1, 20], [6, [6, 12, 8], 6]];
const result2_2 = flattenArray(inputArray);
console.log(result2_2);



// 3.1
function countZeroSumPairs(arr) {
    let count = 0;
    let numMap = new Map();

    for (let num of arr) {
        let complement = -num;

        if (numMap.has(complement)) {
            count++;
            numMap.delete(complement);
        } else {
            numMap.set(num, true);
        }
    }

    return count;
}

console.log(countZeroSumPairs([-7, 12, 4, 6, -4, -12, 0])); 
console.log(countZeroSumPairs([-1, 2, 4, 7, -4, 1, -2]));
console.log(countZeroSumPairs([-1, 1, 0, 1]));
console.log(countZeroSumPairs([-1, 1, -1, 1])); 
console.log(countZeroSumPairs([1, 1, 1, 0, -1]));
console.log(countZeroSumPairs([0, 0]));
console.log(countZeroSumPairs([]));



// 3.2
function f(arr) {
    let count = 0;
    const length = arr.length;
    for (let i = 0; i < length - 2; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            for (let k = j + 1; k < length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    count++;
                }
            }
        }
    }
    return count;
}

console.log(f([-7, 12, 4, 6, -4, -12, 0])); 
console.log(f([-1, 2, 4, 7, -4, 1, -2])); 
console.log(f([-1, 1, 0, 1])); 
console.log(f([-1, 1, -1, 1])); 
console.log(f([1, 1, 1, 0, -1]));
console.log(f([0, 0]));
console.log(f([])); 
