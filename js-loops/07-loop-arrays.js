const names = ['John', 'Jane', 'Alex', 'Max', 'james'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//looping arrray elements with for loop
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

console.log('\n -----------for...of loop -----------\n');

// loopinfg array elements with for...of loop

// Task - 1
let count = 0;
for(const name of names){
    if(name.toLowerCase().startsWith('j')) count++;
}
console.log(count);

let jNames = 0;
for(let i = 0; i < names.length; i++){
if(names[i].toLowerCase().startsWith('j')) jNames++;
}
console.log(jNames);
