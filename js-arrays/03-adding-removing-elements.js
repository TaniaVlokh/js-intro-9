const names = [ 'Alex', 'John'];
console.log(names); //[ 'Alex', 'John' ]

// Will be added to the tail of array
console.log(names.push('Jane')); 

console.log(names); //[ 'Alex', 'John', 'Jane' ]

names.push('Max', 'Maria'); 
console.log(names);  //  'Alex', 'John', 'Jane', 'Max', 'Maria' ]

// Removing elements from the end of the array
// .pop() remove only one element at a time

console.log(names.pop()); // Maria
console.log(names); //[ 'Alex', 'John', 'Jane', 'Max' ]

console.log(names.pop()); 

// Adding element to the beggings of the array
names.unshift('James');
console.log(names); //[ 'James', 'Alex', 'John', 'Jane' ]

names.unshift('Mary', 'Jessie');
console.log(names); // [ 'Mary', 'Jessie', 'James', 'Alex', 'John', 'Jane' ]

// Removing elements from the begging of the array

console.log(names.shift());  // 'Mary'
console.log(names.shift());  // 'Jessie'
console.log(names.shift());  // 'James'
console.log(names);          // [ 'Alex', 'John', 'Jane' ]


