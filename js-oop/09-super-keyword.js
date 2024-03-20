class Person{
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    
}
//const person1 = new Person();  allowed but all info is undefined



class Customer extends Person{
constructor(fname, lname, age, id){
    super(fname, lname, age)
        this.id = id;
}

}
const cust = new Customer('John', 'Doe', 18, 5)
console.log(cust)