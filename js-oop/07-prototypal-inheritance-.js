//BEFORE ES6

function Person(){

}
Person.prototype.sleep = function(){
    console.log('SLEEP')
}

function Programmer () {

}
// Inherit all person methods inro Programmer

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.code = function(){
    console.log('CODE');
}

const programmmer_mustafa = new Programmer();
programmmer_mustafa.code();

// Create Singer template which inherits from Person and add sing method to it.
// Create a Singer object and execute the sing(), eat() and sleep() method


class Person1{
    constructor(){
        eat();
        sleep();
    }

}

function Singer() {
    Singer.prototype = Object.create(Person.prototype);
    Singer.prototype.sing = function(){
        console.log('SING');
    }
}
const singer1 = new Singer();
singer1.sleep();
singer1.eat();