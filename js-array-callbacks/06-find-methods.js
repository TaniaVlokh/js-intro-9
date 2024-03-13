

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


const cities = [ 'Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];

console.log(cities.find(city => city.length === 4));
console.log(cities.findLast(city => city.length === 6));
console.log(cities.findIndex(city => city.includes('LA')));
console.log(cities.find(city => city.includes('i')));
console.log(cities.findLast(city => city.length === 4));


