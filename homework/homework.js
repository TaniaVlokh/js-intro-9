// Task -1 
const toInitials = str => {
  str= str.split(' ')
  let firstL =  str[0][0]
  let lastL =  str[1][0]
  return `${firstL}. ${lastL}.`
}

console.log(toInitials( "Joe Doe")    )  // -> "J. D."
console.log(toInitials( "Alex Reyes") )  // -> "A. R."
console.log(toInitials( "Tom Cruise") )  // -> "T. C."
console.log(toInitials( "Bruce Willis")) // -> "B. W."
console.log(toInitials( "Ja Le"))        // -> "J. L."

// Task - 2
const hasNumbers = str => {
  let num = str.match(/\d+/g)
  return (!num) ? false : true
}

console.log(hasNumbers(""))                    // -> false
console.log(hasNumbers("John is 34 years old"))// -> true
console.log(hasNumbers("Hello 3"))             // -> true
console.log(hasNumbers("125$") )               // -> true
console.log(hasNumbers("   a   "))             //-> false
console.log(hasNumbers("      "))              //-> false
console.log(hasNumbers("!@#$%^&*()_+"))        //-> false

// Task - 3
const elementLength = arr => {
  return arr.map(el => el.length)
}
console.log(elementLength( [ "Hello", "World" ] ))                         // -> [ 5, 5 ]
console.log(elementLength( [ "Apple", "Banana", "Orange", "Pear" ] ))      // -> [ 5, 6, 6, 4 ]
console.log(elementLength( ["BMW", "Mercedes", "Audi" ] ))                 // -> [ 3, 8, 4 ]
console.log(elementLength( [ ] ))                                          //  -> [ ]
console.log(elementLength( [ "Trampoline", "", "Tennis", "Basketball" ] )) // -> [ 10, 0, 6, 10 ]

// Task - 4

const isArraySumEvenOrOdd = arr => {
  

  let sum = arr.reduce((acc, cur) => acc + cur ,0)
  return sum % 2 === 0 ? 'even' : 'odd'
}

console.log(isArraySumEvenOrOdd( [ ] )        )     //-> "even"
console.log(isArraySumEvenOrOdd( [ 0,-1,-5 ] ))     //-> "even"
console.log(isArraySumEvenOrOdd( [ 7,1, 8,1 ] ))    //->  "odd”
console.log(isArraySumEvenOrOdd( [ 0,0 ] )    )     //->  "even"
console.log(isArraySumEvenOrOdd( [ 1,1,1,1,1 ]) )   //->  "odd”

// Task - 5

const reverse = str => {
  return str.split('').reverse().join('')
}

console.log(reverse("Hello World"))         //-> "dlroW olleH"
console.log(reverse("TechGlobal"))          //-> "labolGhceT"
console.log(reverse("Basketball is fun"))   //-> "nuf si llabteksaB"
console.log(reverse("") )                   //-> ""
console.log(reverse("Apples 456"))          //-> "654 selppA"

// Task - 6 
const reverseWords = str => {
  str =  str.split(' ')
let revWord = []
  for(const word of str ){
    revWord.push(word.split('').reverse().join(''))
  }
  return revWord. join(' ')
}
console.log(reverseWords("Hello World") )      // -> "olleH dlroW"
console.log(reverseWords("TechGlobal"))        //-> "labolGhceT"
console.log(reverseWords("Basketball is fun")) //-> "llabteksaB si nuf"
console.log(reverseWords(""))                  //-> ""
console.log(reverseWords("Apples 456"))        //-> "selppA 654"