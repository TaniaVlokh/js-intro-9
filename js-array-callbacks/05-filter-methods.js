const numbers = [ 10, 5, 100, 77, 50, 65, 0 ];

// Find all the numbers that are 50 or more

const result = numbers.filter( num => num >= 50);
console.log(result);
console.log(result.length); // to get count of num >= 50


const fruits = ['Orange', 'Apple', 'Red Apple', 'Pineapple', 'Kiwi']

const appleArray = fruits.filter( app => app.toLowerCase().includes('apple'));
console.log(appleArray);

const hasA = fruits.filter( app => app.toLowerCase().includes('a'));
console.log(hasA.length);

const hasI = fruits.filter( app => app.toLowerCase().includes('i'));
console.log(hasI.length);


/*
Create a method which takes an array as argument and returns all the even numbers from the original
array as a new array

evens( [ 1, 5, 2, 0, 6, 7 ] )   -> [ 2, 0, 6 ]
evens( [ 4, 5, 2 ] )            -> [ 4, 2 ]

*/

function evens (arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(evens([ 1, 5, 2, 0, 6, 7 ]));
console.log(evens([ 4, 5, 2 ]));
  