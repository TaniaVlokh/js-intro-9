
class Cat{
    constructor(name, color, age){
        this.name = name;
        this.color = color;
        this.asge - age;
    }
    makesSound(){
        console.log(`MEOW`) ;
    }
    eat(){
        console.log(`EAT`) ;
    }
    sleep(){
        console.log(`SLEEP`) ;
    }
}

const cat1 = new Cat('Simba', 'Orange', 1);
const cat2 = new Cat('Lucy', 'White', 2);
const cat3 = new Cat('Oliver', 'Brown', 3);


for(const cat of [cat1, cat2, cat3]){
    console.log(cat);
    cat.makesSound();
    cat.eat();
    cat.sleep();
}
const oldest =  [cat1, cat2, cat3].reduce((acc, cur) => {
    return  acc.age > cur.age ? acc : cur;
 })
 console.log(oldest);