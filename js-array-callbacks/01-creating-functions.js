

// 1. function declaration

function greeting1(){
    console.log('Hello');
}
greeting1();

// 2. function expression
const  greeting2 = function () {
    console.log('Hello');
}
greeting2();

// 3. arrow functions - huge ES6 feature

const greeting3 = () => {
    console.log('Hello');
}
greeting3();


function product1(num1, num2){
    return num1 * num2;
}
console.log(product1(3, 5));

const  product2 = function (num1, num2) {
    return num1 * num2;
}
console.log(product2(3, 5));


const product3 = (num1, num2) => {
    return num1 * num2;
}
console.log(product3(3, 5));

// Enhanced arrow function
const product4 = (num1, num2) =>  num1 * num2;
console.log(product3(3, 5));


const upperCaseName = str => str.toUpperCase(); //  no() when 1 arg

console.log(upperCaseName('John'));   // JOHN
