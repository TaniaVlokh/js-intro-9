/*
let result = 0;

function score(){
    result += 1;
}

score(); 
score(); 
score(); 

result = 10
*/

// Closure will prevent variabals to be reassigned

function score(){
    let result = 0;

    return function(){
        result += 1;
        return result;
    }
}
const increase = score();

increase();
increase();
increase();
increase();
const newScore = increase();
console.log(newScore);
