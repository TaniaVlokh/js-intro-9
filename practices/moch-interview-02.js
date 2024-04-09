// Task - 1 
const doubleOrTripleWord = (str) =>  str.length % 2 === 0 ? str.repeat(3) : str.repeat(2) 

console.log(doubleOrTripleWord("Tech"))    //  -> "TechTechTech" 
console.log(doubleOrTripleWord("Apple"))   //  -> "AppleApple” 
console.log(doubleOrTripleWord(""))        //  -> "" 
console.log(doubleOrTripleWord(" "))       //  -> " " 
console.log(doubleOrTripleWord("1"))       //  -> "11" 
console.log(doubleOrTripleWord("22"))      //  -> "222222"

// Task - 2

function firstLastWord(str) {
let newStr = str.split(' ')
return newStr[0] + newStr.at(-1)
}

console.log(firstLastWord("Hello World"))           // -> "HelloWorld" 
console.log(firstLastWord("I like JavaScript"))     // -> "IJavaScript” 
console.log(firstLastWord("Hello"))                 // -> "HelloHello" 
console.log(firstLastWord(""))                      // -> "" 
console.log(firstLastWord("  "))                    // -> "" 

// Task - 3

const hasVowel1 = (str) => str.split('').filter((x) =>  'oiuea'.includes(x.toLowerCase())).join('') ? true : false 

console.log(hasVowel(""))              //  -> false 
console.log(hasVowel("Javascript"))    //  -> true 
console.log(hasVowel("Tech Global"))   //  -> true 
console.log(hasVowel("1234"))          //  -> false 
console.log(hasVowel("ABC"))           //  -> true

function hasVowel(str){
    let arr = str.toLowerCase().split('');
    for(let i = 0; i < arr.length; i++){
        if('oiuea'.includes(arr[i])) return true;
    }
    return false;
}

// Task - 4

function startVowel(str){
    if(str.trim() === '') return false;

   // let firstChar = str[0].toLowerCase();
    
    return 'ouiea'.includes(str[0].toLowerCase()) ? true : false
  } 
console.log(startVowel("Hello"))    // -> false 
console.log(startVowel("Apple"))    // -> true 
console.log(startVowel("orange"))   // -> true 
console.log(startVowel(""))         // -> false 
console.log(startVowel("  "))       // -> false 
console.log(startVowel("123"))      // -> false

// Task - 5

function averageOfEdges(n1, n2, n3){
    let min = Math.min(n1, n2, n3)
    let max = Math.max(n1, n2, n3)
    return (min + max) / 2;
}
console.log(averageOfEdges(0, 0, 0))            // -> 0 
console.log(averageOfEdges(0, 0, 6))            // -> 3 
console.log(averageOfEdges(-2, -2, 10))         // -> 4 
console.log(averageOfEdges(-3, 15, -3))         // -> 6 
console.log(averageOfEdges(10, 13, 20))         // -> 15 
 


function averageOfEdges(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return (min + max) / 2;
}
console.log(averageOfEdges([0, 0, 0]))            // -> 0 
console.log(averageOfEdges([0, 0, 6]))            // -> 3 
console.log(averageOfEdges([-2, -2, 10]))         // -> 4 
console.log(averageOfEdges([-3, 15, -3]))         // -> 6 
console.log(averageOfEdges([10, 13, 20]))         // -> 15 


function  replaceFirstLast(str){
    str = str.trim();
    if(str.length <= 2) return '';
    let last = str.at(-1);
    return last + str.slice(1, -1) + str.at(0);
}
console.log(replaceFirstLast(""))                  // ->  "" 
console.log(replaceFirstLast("Hello"))             // ->  "oellH" 
console.log(replaceFirstLast("Tech Global"))       // -> "lech GlobaT" 
console.log(replaceFirstLast("A"))                 // -> "" 
console.log(replaceFirstLast("    A      "))       // -> "" 

function swap4(str){
str = str.trim();
if(str.length < 8) return '';
let last4 = str.slice(-4);
let first4 = str.slice(0, 4)
return last4 + str.slice (4, -4) + first4;
}
console.log(swap4("abc"))             //  -> "" 
console.log(swap4("JavaScript"))      //  -> "riptScJava" 
console.log(swap4("TechGlobal"))      //  -> "obalGlTech" 
console.log(swap4(""))                //  -> "" 
console.log(swap4("  "))              //  -> "" 
console.log(swap4("Apple"))           //  -> ""

function swapFirstLastWord(str){
    str = str. trim();
    if(!str.includes(' ')) return "";
    let lastWord = str.slice(str.lastIndexOf(' ') + 1)
    let firstWord = str.slice(0, str.indexOf(' '))
    return lastWord + str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1) + firstWord

}
console.log(swapFirstLastWord("Hello World"))       // -> "World Hello" 
console.log(swapFirstLastWord("I like JavaScript")) // -> "JavaScript like I" 
console.log(swapFirstLastWord("foo bar foo bar"))   // -> "bar bar foo foo" 
console.log(swapFirstLastWord(""))                  // -> "" 
console.log(swapFirstLastWord("  ") )               // -> "" 
console.log(swapFirstLastWord("Hello") )            // -> "" 
console.log(swapFirstLastWord("Hello   ") )         // -> ""

const countPos = (arr) => arr.filter( x =>  x > 0).length 
console.log(countPos([-45, 0, 0, 34, 5, 67]))       // -> 3 
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))  // -> 4 
console.log(countPos([0, -1, -2, -3]))              // -> 0 

function getEvens(n1, n2){
    let start = Math.min(n1, n2)
    let end = Math.max(n1, n2)

    const evenNum = []
    for(let i = start; i <= end; i++){
        if(i % 2 === 0) evenNum.push(i)
    }
return evenNum;
} 

console.log(getEvens(2, 7))    // -> [ 2, 4, 6 ] 
console.log(getEvens(17, 5))   // -> [ 6, 8, 10, 12, 14, 16 ] 
console.log(getEvens(4, 4))    // -> [ 4 ] 
console.log(getEvens(3, 3))    // -> [ ]

function  getMultipleOf5(n1, n2){
    let start = Math.min(n1, n2)
    let end = Math.max(n1, n2)
    const arr5 = [];
    for(let i = start; i <= end; i++){
        if(i % 5 === 0) arr5.push(i)
    }
return arr5;
}

console.log(getMultipleOf5(3, 17))    // -> [ 5, 10, 15] 
console.log(getMultipleOf5(23, 5))    // -> [ 20, 15, 10, 5 ] 
console.log(getMultipleOf5(5, 5))     // -> [ 5 ] 
console.log(getMultipleOf5(2, 4))     // -> [ ] 
 
const countNeg = (arr) => arr.filter(x => x < 0).length
console.log(countNeg([-45, 0, 0, 34, 5, 67])     )    // -> 1 
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]))    // -> 2 
console.log(countNeg([0, -1, -2, -3])            )    // -> 3

const countA = (str) => str.toLowerCase().split("").filter(x => x === 'a').length
console.log(countA("TechGlobal is a QA bootcamp")   )     // -> 4 
console.log(countA("QA stands for Quality Assurance"))    // -> 5 
console.log(countA("Cypress")                       )     // -> 0

const countWords = (str) => str.trim().split(' ').length; 
console.log(countWords("     Javascript is fun       ")        )    // -> 3 
console.log(countWords("Cypress is an UI automation tool.    "))    // -> 6  
console.log(countWords("1 2 3 4")                              )    // -> 4

function factorial(num){
    if (num === 1 || num === 0 ) return 1;
    return num * factorial(num - 1)
}
console.log(factorial(5))    // -> 120 
console.log(factorial(4))    // -> 24 
console.log(factorial(0))    // -> 1 
console.log(factorial(1))    // -> 1

const count3OrLess = (str) => str.split(' ').filter(x =>  x === '' ? 0 : x.length <= 3).length
console.log(count3OrLess("Hello")             )     // -> 0 
console.log(count3OrLess("Hi John")           )     // -> 1 
console.log(count3OrLess("JavaScript is fun") )     // -> 2 
console.log(count3OrLess("My name is John Doe"))    // -> 3 
console.log(count3OrLess("")                  )     // -> 0

const removeExtraSpaces = (str) =>str.trim().split(/\s+/).join(' ')

console.log(removeExtraSpaces("Hello")                     )   // -> "Hello" 
console.log(removeExtraSpaces("    Hello    World  ")      )   // -> "Hello World" 
console.log(removeExtraSpaces("   JavaScript is        fun"))  // -> "JavaScript is fun” 
console.log(removeExtraSpaces("")                          )   // -> ""  

function  middleInt(n1, n2, n3){
    let arr = [n1, n2, n3]
    let sortArr = arr.sort((a, b) => a - b)
   return sortArr[1];
}
console.log(middleInt(1, 2, 2)   )    // -> 2 
console.log(middleInt(5, 5, 8)   )    // -> 5 
console.log(middleInt(5, 3, 5)   )    // -> 5 
console.log(middleInt(1, 1, 1)   )    // -> 1 
console.log(middleInt(-1, 25, 10))    // -> 10

function  firstDuplicate(arr) {
 for(let i = 0; i < arr.length; i++){
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]))
        return arr[i]
    }
 return -1;
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))            //-> 3 
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))             //-> 5 
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]))               //-> -1 
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))   //-> 'abc' 
console.log(firstDuplicate([ 1, 2, 3]))                        //-> -1 
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))    //-> -1 

function getDuplicates(arr){
let arrOfDup = [];
for(let i = 0; i < arr.length; i++){
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && !arrOfDup.includes(arr[i])) arrOfDup.push(arr[i])
}
return arrOfDup;
}    
const getDuplicates = arr => arr.filter(x => arr.indexOf(x) !== arr.lastIndexOf(x))
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) )    // -> [ 0, -7 ] 
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]))    // -> [ ] 
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]))   // -> [ 'foo', 'a’ ] 
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]))    // -> [ ] 


const countVowels = (str) => str.split('').filter(x => 'oiuea'.includes(x)).length 
console.log(countVowels("Hello"))               // -> 2 
console.log(countVowels("JavaScript is fun"))   // -> 5 
console.log(countVowels(""))                    // -> 0

function reverseStringWords(str){
str = str.split(' ');
let revArr = []
for(const word of str){
    let revWord = word.split('').reverse().join('')
    revArr.push(revWord)
}
 return revArr.join(' ')
}
console.log(reverseStringWords("Hello World") )    // -> "olleH dlroW" 
console.log(reverseStringWords("I like JavaScript"))    // -> "I ekil tpircSavaJ" 
console.log(reverseStringWords("Hello"))    // -> "olleH" 
console.log(reverseStringWords("") )    // -> "" 
console.log(reverseStringWords(" "))    // -> ""

const countConsonants = (str) => str.split('').filter(x => !'oiuea'.includes(x.toLowerCase())).length
console.log(countConsonants("Hello"))                // -> 3 
console.log(countConsonants("Hello World"))          // -> 8 
console.log(countConsonants("JavaScript is fun"))    // -> 12 
console.log(countConsonants("") )                    // -> 0 

const countMultipleWords = (arr) => arr.filter(x => x.trim().includes(' ')).length

console.log(countMultipleWords([ "foo", "", "  ", "foo bar", "   foo" ]))               // -> 1 
console.log(countMultipleWords([ "foo", "bar", "foobar", "   foobar   " ]))             // -> 0 
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]))     // -> 4 
console.log(countMultipleWords([ ]))                                                    // -> 0 

function  fizzBuzz(n1, n2){
    let start = Math.min(n1, n2)
    let end = Math.max(n1, n2)
    const result = []


    for(let i = start; i <= end; i++){
        if(i % 3 === 0 && i % 5 === 0 ){
            result.push('FizzBuzz')
        }else if(i % 3 === 0){
            result.push('Fizz')
        }else if(i % 5 === 0){
            result.push('Buzz')
        }else{
            result.push(i)
        }
    }
    return result.join(' | ')
}

console.log(fizzBuzz(13, 18))    // -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
console.log(fizzBuzz(12, 5))     // -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz" 
console.log(fizzBuzz(5, 5))      // -> "Buzz" 
console.log(fizzBuzz(9, 6))      // -> "Fizz | 7 | 8 | Fizz" 