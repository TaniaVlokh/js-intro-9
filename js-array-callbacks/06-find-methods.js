

const numbers = [ 0, 10, -4, 5, 2, -3];

// Find forst positive

console.log(numbers.find(number => number > 0));


/*
LOOP solution

let firstP;
for(const number of numbers){
    if(number > 0){
        firstP = number;
        break;
    }
}
console.log(firstP); */