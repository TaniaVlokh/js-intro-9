const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];


// Task - 1 - 
// find quantity of positive numbers
console.log('======================  positive numbers  ===============');

function positive0Num(array){
    const newArr = []
for(let i = 0; i < array.length; i++ ){

    if(array[i] >= 0) {
    newArr.push(array[i]);
   
}
}
return newArr;
}
//console.log('Quantity of positive numbers is =', countP);
console.log(positive0Num(numbers));
// Task - 2
console.log('================= neg and neu numbers  ===============');

let countN = 0;
for(const num of numbers){
    if(num <= 0) countN++;
}
console.log('Quantity of negative or 0\'s numbers is =', countN);

// Task - 3
console.log('================= even numbers  ===============');

let eveN = 0;
for(const num of numbers){
    if(num % 2 === 0 ) eveN++;
}
console.log('Quantity of even numbers is =', eveN);


// Task - 3
console.log('================= even but positive numbers  ===============');

let cnt = 0;
let n = positive0Num(numbers).length;

 for(let i = 0; i < n; i++){
    if(positive0Num(numbers)[i] % 2 === 0) cnt++;

 }


console.log('Quantity of even and pos numbers is =', cnt);