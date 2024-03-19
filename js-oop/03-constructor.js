function Product (name, price, quantity) {
    
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.sell = function (quantity){
    if(quantity <= this.quantity) this.quantity -= quantity;
    else throw new Error(`Out of stock
    You can purches up to ${this.quantity} ${this.name}`);
}
Product.prototype.return = function (quantity){
    this.quantity += quantity;
}
Product.prototype.getInventory = function (){
   return ` We have ${this.quantity} of ${this.name}`
}
Product.prototype.getValue = function (){
    return ` The total value of ${this.name} items is ${this.quantity * this.price}`
 }
 Product.prototype.discount = function (percentage){
    this.price -= this.price * (percentage/100)
 }

const product1 = new Product('Remote', 10, 6);
const product2 = new Product('Monitors', 100, 5);
const product3 = new Product('Laptop', 1000, 3);
const product4 = new Product('Phone', 500, 10);

product4.sell(3)
console.log(product4)
console.log(product4.quantity)
product1.sell(1)
console.log(product3.getValue())

product4.discount(25);
console.log(product4)
