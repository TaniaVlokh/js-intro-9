class Author {
    // private properties - can only be used within the class
    #isKnown;
    // get isKnown() {
    //     return this.#isKnown;
    // }
    // set isKnown(newValue) {
    //     return this.#isKnown = newValue;
    // }




    getIsKnown() {
        return this.#isKnown;
    }
    setIsKnown(newValue) {
        return this.#isKnown = newValue;
    }
    

    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

}

const author1 = new Author('John', 'Doe');

console.log(author1.setIsKnown(false))
console.log(author1.getIsKnown())
console.log(author1.isKnown)