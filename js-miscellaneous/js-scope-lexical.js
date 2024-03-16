
function outer(){
fullName = 'John Doe';

function inner(){
    let upper = fullname.toUpperCase();
    console.log(upper);
}
inner();
}
outer();

// outer() is executed
// fullname = 'John Doe'
// console log(upper) -> Reference Arrow: upper is not defined