let name = 'John';

console.log(name);
console.log(typeof name); //string

const names = ['john', 'Jane', 'Alex', 'Max'];

//retrieving an individual element from an array
console.log(names); //['john', 'Jane', 'Alex', 'Max']
console.log(names[0]);   //John
console.log(names[2]);   //Alex


//retrieve and update Max with Alex
names[3] = 'Mark';

console.log(names);       // [ 'john', 'Jane', 'Alex', 'Mark' ]
console.log(names[3]);    //  Mark


const numbers = [10, -3, 25, 67, 99 ,100.99];

//you can get array size with the length property
console.log(numbers.length); // 5


console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[5]);




