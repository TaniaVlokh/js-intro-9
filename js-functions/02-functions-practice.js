function sayHi(){
    console.log('Hi');
}
sayHi();

function sayHello(name){
console.log('Hello', name + '!');
}

sayHello('Ali');


function greet(name, greeting){
    console.log(`${greeting}, ${name}!`);
}

greet('Ali', 'Good morning');

function sum(num1, num2){
    return num1 + num2;
}
console.log(sum(7, 8));


function product(num1, num2, num3){
    return num1 * num2 * num3;
}

function king(name, n){
    console.log(`${name} the ${n}th!`);
}

king('Henry', 5);
