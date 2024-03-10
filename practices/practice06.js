// Task - 1 
function firstPos(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            return arr[i];
        }
    }
}
console.log(firstPos([0, 3, -9, 5, 8]));
console.log(firstPos([-2, 0, -7, 10, -5]));
console.log(firstPos([1, 2, 3, -2]));

// Task -2

function lastNeg(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 0) {
            return arr[i];
        }
    }
}
console.log(lastNeg([0, 3, -9, 5, 8]));
console.log(lastNeg([-2, 0, -7, 10, -5]));
console.log(lastNeg([1, 2, 3, -2]));

// Task - 3 

// irstLongest(["red", "blue", "yellow", "white"])  -> "yellow"

function firstLongest(arr) {
    let theLongestOne = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > theLongestOne.length) theLongestOne = arr[i];
    }
    return theLongestOne;
}

console.log(firstLongest(["red", "blue", "yellow", "white"]));
console.log(firstLongest(["Apple", "Banana", "Orange"]));
console.log(firstLongest(["purple", "yellow", "orange"]));

// Task - 4 

function lastShortest(arr) {
    let shortest = arr[0];
    for (let i =1; i < arr.length; i++) {
        if (arr[i].length <= shortest.length) {
            shortest = arr[i];

        }
    }
    return shortest;
}
console.log(lastShortest(["red", "blue", "yellow", "white"]));
console.log(lastShortest(["Apple", "Banana", "Mango"]));
console.log(lastShortest(["white", "yellow", "brown"]));

// Task = 4 - second approach

function lastShortest(arr) {
    let short = arr[0];
    for (const elem of arr) {
        if (elem.length <= short.length) short = elem;
    }
    return short;
  
}
console.log(lastShortest(["red", "blue", "yellow", "white"]));
console.log(lastShortest(["Apple", "Banana", "Mango"]));
console.log(lastShortest(["white", "yellow", "brown"]));



// Task - 5 -> first approach

function max(arr){
        return Math.max(...arr);
    } 

    console.log(max([0, 3, -9, 5, 8]));
    console.log(max([-2, 0, -7, 10, -5]));
    console.log(max([1, 2, 3, -2]));

// Task - 5 -> second approach

function max(arr) {
    arr.sort((a, b) => a - b)
    return arr [arr.length -1];
}

console.log(max([0, 3, -9, 5, 8]));
console.log(max([-2, 0, -7, 10, -5]));
console.log(max([1, 2, 3, -2]));

// Task - 6
function min(arr){
    return Math.min(...arr);
} 

console.log(min([0, 3, 5, 8]));
console.log(min([-2, 0, -7, 10, -5]));
console.log(min([1, 2, 3, 15]));

function commonElements(arr1, arr2) {
    const arr3 = [];
    const longestArr = arr1.length > arr2.length ? arr1 : arr2;
    const shortestArr = arr1.length > arr2.length ? arr2 : arr1;

    for (let i = 0; i < shortestArr.length; i++) {
        if (longestArr.includes(shortestArr[i])) {
            arr3.push(shortestArr[i]);
        }
    }
    return arr3;
}

console.log(commonElements([10, 20, 30, 50, 70], [20, 50, 70]));
console.log(commonElements([30, 50, 70], [20, 100, 300]));
console.log(commonElements(["30", "abc", "hi"], [30, "Hi", "abc"]));


