const numbers = [ 1, 2, 3 ] ;  // one-dimentional array

const students = [ 
[
    ['Ameer', 'Ali', 'Hicran'],
    ['Emre', 'Abdullas', 'Tania', 'Mustafa'],
    ['Marta','Niko','Mykola']
],
[
    ['Jane', 'Alex', 'John'],
    ['Maria', 'Max']
]
];
console.log(students.length);       // 2
console.log(students[0].length);    // 3
console.log(students[0][1].length); // 4
console.log(students[0][1][2]);     // Tania

// Get Max name
console.log(students[1][1][1]);
