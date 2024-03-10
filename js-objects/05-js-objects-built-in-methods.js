const car = {
    color: 'red',
    year: 2023,
    make: 'BMW',
    model: 'X7'
}

let keys = Object.keys(car);             // returns array
let values = Object.values(car);         // returns array
let entries  = Object.entries(car);      // returns array
console.log(keys);
console.log(values);
console.log(entries);

for(const key of Object.keys(car)){
    console.log(key);
}

for(const value of values){
console.log(value);
}

for(const entry of entries){
    console.log(entry);
}

for(const [key, value] of entries){
console.log(`Key-value pair = `, key, value);
}