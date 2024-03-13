this; // {}

// We create getInfo() to be used with some object
function getInfo(fullname, age){
    console.log(`${this.fullname} is ${this.age} years old.`);
}
getInfo();

const person = {
    fullname : 'Mustafa A',
    age: 25,
};

const student = {
    fullname: 'Ameer B',
    age: 40
}



const anotherMethod = getInfo.bind(student);
anotherMethod();