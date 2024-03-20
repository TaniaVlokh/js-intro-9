// BEFORE ES6

const person = {
    eat(){
       console.log('EAT function')
    },
    sleep(){
        console.log('SLEEP function')
    }
}

const programmmer = {
    code(){
        console.log('CODE function')
    },
    __proto__: person
}

const singer = {
    sing(){
        console.log('SING function')
    },
    __proto__: person
}