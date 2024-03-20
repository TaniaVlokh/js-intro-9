// AFTER ES6

class Person{
 
    constructor(){

    }
    eat(){
        console.log('EAT')
    }
    sleep(){
        console.log('SLEEP')
    }

}

class Programmer extends Person {
    code(){
        console.log('CODE')
    }
}
const programmer1 = new Programmer();
programmer1.code();
programmer1.sleep();
programmer1.eat();

class Singer extends Person{
    sing(){
        console.log('SING')
    }
}

const singer1 = new Singer();
singer1.sing();
singer1.eat();
singer1.sleep();