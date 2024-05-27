
// Task - 1 
  const repeatingX = str => {
  str = str.toLowerCase();
  let result = false;
  for(let i = 1; i < str.length; i++){
    if(str[i] === 'x' && str[i-1] === 'x') {
      result = true;
    }
}
return result
}
console.log(repeatingX("xTechxGlobalx"))   //-> false
console.log(repeatingX("Hello Xx World")) //-> true
console.log(repeatingX("x x"))            //-> false
console.log(repeatingX(""))               //-> false
console.log(repeatingX("xxxxx"))          //-> true

// Task - 2
const isPerfectSquare = num => {
  return ((Math.sqrt(num) * Math.sqrt(num)) === num) ? true : false
}

console.log(isPerfectSquare(25))    //-> true
console.log(isPerfectSquare(24))    //-> false
console.log(isPerfectSquare(0) )    //-> true
console.log(isPerfectSquare(1) )    //-> true
console.log(isPerfectSquare(-1))    //-> false
console.log(isPerfectSquare(144))   //-> true


// Task - 3

const convertTemperature = (num, str) => {
  return str === 'Celsius' ?  (num * 9/5) + 32 : (num - 32) * 5/9
}
console.log(convertTemperature(100, 'Celsius'))    //> 212
console.log(convertTemperature(32, 'Fahrenheit'))   //-> 0
console.log(convertTemperature(0, 'Celsius'))       //-> 32
console.log(convertTemperature(212, 'Fahrenheit'))  // -> 100
console.log(convertTemperature(-40, 'Celsius'))     //-> -40
console.log(convertTemperature(-40, 'Fahrenheit'))  //  -> -4

// Task - 4

const sumOfEvenNumbers = arr => arr.filter(el =>  el % 2 === 0).reduce((acc, cur) =>   acc = acc + cur,0)

console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ))       //-> 30
console.log(sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] ))  //> 110
console.log(sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] ))   //> 0
console.log(sumOfEvenNumbers( [ ] ))                                     //> 0
console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] ))                       // -> 6
console.log(sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ] ))                  //-> 150

// Task - 5
const capsOdds = arr => {
  for(let i = 1; i < arr.length; i+=2){
     arr[i] = arr[i].toUpperCase();
  }
  return arr;
}

console.log(capsOdds(["Hello", "World"]))                                 // -> ["Hello", "WORLD"]
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]))                       // -> ["Jan", "FEB", "Mar", "APR"]
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"])) // -> ["Apple", "BANANA", "123", "456", "Peach", "KIWI"]
console.log(capsOdds([ ]))                                                // -> [ ]
console.log(capsOdds(["John !@#$%", "^&*() Doe"]))                        // -> ["John !@#$%", "^&*() DOE"]
