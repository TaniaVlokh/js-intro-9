

function isEven(num){
   return num % 2 === 0;
}

console.log(isEven(-9));



function isOdd(num){
    return !isEven(num);
 }
 console.log(isOdd(9));


 function initials(fname, lname){
    return fname.slice(0,1) +'.' + lname.slice(0,1) + '.';
    // return `${fname}. ${lname}.` 
    // return fname.at(0) + '.'+ lname.at(0) + '.';
 }

 console.log(initials('John', 'Wick'));
 

 function init(fullName){
    let fname = fullName.split(' ');

    return fname[0][0]  + fname[1][0];
 }
 console.log(init('John Wick'));



