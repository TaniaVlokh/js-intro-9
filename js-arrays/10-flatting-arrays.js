const students = [ 
    [
        ['Ameer', 'Ali', 'Hicran'],
        ['Emre', 'Abdullas', 'Tania', 'Mustafa'],
        ['Marta','Niko','Mykola']
    ],
    [
        ['Jane', 'Alex', 'John'],
        ['Maria', 'Max', ['Ali', 'James']]
    ]
    ];
    console.log(students);
    console.log(students.flat());
    console.log(students.flat().flat().length);
    console.log(students.flat().length);        // 5
    console.log(students.flat(2).length);       // 15
