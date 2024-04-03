class Customer {
    constructor(name, age, membershipType, membershipCost) {
        this.name = name;
        this.age = age;
        this.membershipType = membershipType;
        this.membershipCost = membershipCost;
    }
    getDetails() {
        return `${this.name} is ${this.age} years old and has a ${this.membershipType} membership with ${this.membershipCost}`
    }
    upgrateMembership(){
        this.membershipType = 'Premium';
        this.membershipCost *= 1.2;
    }
}

class VIPCustomer extends Customer{
    constructor(name, age, membershipType, membershipCost){
        super(name, age, membershipType, membershipCost);
    }

    applyDiscount(){
       this.membershipCost *= 0.9;

    }
}

class BusinessCustomer extends Customer{
    constructor(name, age, membershipType, membershipCost, duration){
        super(name, age, membershipType, membershipCost);
        this.duration = duration;
    }
    extandContract(){
        this.duration += 1;
        this.membershipCost *= 0.85;
    }
}

const customer1 = new Customer('John Doe', 30, 'Basic', 50);
const vipCustomer = new VIPCustomer('Jane Smith', 35, 'Gold', 100);
const businessCustomer = new BusinessCustomer('David Johnson', 40, 'Platinum', 200, 2);

customer1.upgrateMembership();
vipCustomer.applyDiscount();
businessCustomer.extandContract();
console.log(businessCustomer)

const allCustomer = [customer1, vipCustomer, businessCustomer];

for(const cust of allCustomer){
    console.log(cust.getDetails())
}
