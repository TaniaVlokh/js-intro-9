
const names = ['John', 'Jane', 'Alex', 'Max'];

names.forEach(name => console.log(name)); // printed names
names.forEach(name => console.log(name[0])); // first letter
names.forEach(name => console.log(name.toUpperCase())); 
names.forEach(name => {                                  // {} - when 2 statements inside the block
    if(name.startsWith('J')) console.log(name);
});

let count = 0;
names.forEach(name => {                                 
    if(name.length === 4) count++;
});
console.log(count);


const numbers = [5, 10, 3, 0, -2];

//numbers.forEach(num => console.log(num));

let even = true;
numbers.forEach(num => {
    if(num % 2 === 0){
        console.log(even);
    }else{
        console.log(!even);  
    }
});

// better way
numbers.forEach(num =>  console.log(num % 2 === 0));


const newArr = [];
numbers.forEach(num => newArr.push(num * 3));
console.log(newArr);

const evenNum = [];
numbers.forEach(num => {
    if(num % 2 === 0) evenNum.push(num)});
console.log(evenNum);

