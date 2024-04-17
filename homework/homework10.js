// Task - 1
function calculateTotalPrice1(obj){
    let sum = 0;

    for(const [key, value] of  Object.entries(obj)){
       // console.log(key, value)
        if(key === "apple"){
            sum += 2.00 * value;
        }
        if(key === "orange"){
            sum += 3.29 * value;
        }
        if(key === "mango"){
            sum += 4.99 * value;
        }
        if(key === "pineapple"){
            sum += 5.25 * value;
        }
    }
    return sum;
}
console.log(calculateTotalPrice1({ apple: 3, mango: 1 }) )                          //-> 10.99
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })         )   //-> 19.12
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })             )   //-> 0
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 }))   //-> 12.24


// Task - 2
function calculateTotalPrice2(obj){
        let sum = 0;
        for(const [key, value] of  Object.entries(obj)){
           // console.log(key, value)
            if(key === "Apple" ){
                sum += 2.00 * value;
                sum -= parseInt(value/2) * (2.00 * 0.5)
            }
            if(key === "Orange"){
                sum += 3.29 * value;
            }
            if(key === "Mango"){
                sum += 4.99 * value;
                sum -= parseInt(value/4) * (4.99)
            }
            if(key === "Pineapple"){
                sum += 5.25 * value;
            }
        }
        return sum.toFixed(2);
    }
console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 }))                         // -> 24.96
console.log(calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })             ) // -> 45.81
console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })         ) // -> 0
console.log(calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 })) // -> 29.51

// Task - 3
function nthWord(str, num){
    return str.split(" ").slice(num-1, num).join()
}

console.log(nthWord("I like programming languages", 2)   )    // "like"
console.log(nthWord("QA stands for Quality Assurance", 4))    // "Quality"
console.log(nthWord("Hello World", 3))                          //> ""
console.log(nthWord("Javascript", 1))                          //> "Javascript”
console.log(nthWord("", 1)  )                                // -> ""


// Task - 4 
function isArmstrong(num){
    num = num.toString().split('')
    let lastNum = num.at(-1)
    let sum = 0;
for(let i = 0; i < num.length; i++){
    sum += Math.pow(num[i], lastNum)
}
num = num.join('');
num = parseInt(num)
return sum === num
}
console.log(isArmstrong(153))         //-> true
console.log(isArmstrong(123))         //-> false
console.log(isArmstrong(1634))        // -> true
console.log(isArmstrong(153))         //-> true
console.log(isArmstrong(1111))        // -> false

// Task - 5
function reverseNumber(str){
return str.toString().split('').reverse().join('')
}

console.log(reverseNumber(371) )  // -> 173
console.log(reverseNumber(123))  // -> 321
console.log(reverseNumber(12) )  // -> 21
console.log(reverseNumber(0)  )  // -> 0
console.log(reverseNumber(111))  // -> 111

// Task - 6
function doubleOrTriple(arr, bool){
return bool ? arr.map(el => el * 2) : arr.map(el => el * 3)
}
console.log(doubleOrTriple([1, 5, 10], true))    // -> [2, 10, 20]
console.log(doubleOrTriple([3, 7, 2], false))    // -> [9, 21, 6]
console.log(doubleOrTriple([-1, -2], true)  )    // -> [-2, -4]
console.log(doubleOrTriple([0], false)      )    // -> [0]
console.log(doubleOrTriple([-1, 0, 1], true))    // -> [-2, 0, 2]

// Task - 7
function splitString(str, num){
    
}
console.log(splitString("JavaScript", 5))   //-> "JavaS cript"
console.log(splitString("Java", 2))         //-> "Ja va"
console.log(splitString("Automation", 3))   //-> ""
console.log(splitString("Hello", 6))        //-> ""
console.log(splitString("12", 1))           //-> "1 2"