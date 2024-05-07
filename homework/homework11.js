
// Task - 1

const countPalindrome = str => str.split(' ').filter(el => el.toLowerCase() === el.split('').reverse().join('').toLowerCase()).length;

console.log(countPalindrome("Mom and Dad")); //-> 2
console.log(countPalindrome("See you at noon")) // -> 1
console.log(countPalindrome("Kayak races attracts racecar drivers"))  //-> 2
console.log(countPalindrome("")) // -> 0
console.log(countPalindrome("No palindrome here"))

// Task - 2
const sum = (arr, condition) => {

  let n = arr.length;
  if(!condition && n % 2 !== 0){
    n = Math.floor(arr.length / 2 ) * 2;
  }

  let sum = 0;
  for(let i = 0; i < n; i++){
    if(condition){
      sum += arr[i];
      i++
    }else{
      i++;
      sum += arr[i];
    }
  }
  return sum;
} 
console.log(sum([1, 5, 10], true)      )    // -> 11
console.log(sum([3, 7, 2, 5, 10], false))   // -> 12
console.log(sum([-1, 1, -2, 2], true)  )    // -> -3
console.log(sum([0, -1, 15, 1], false) )    // -> 0
console.log(sum([1, 2, 3, 4, -4], true))    // -> 0

// Task - 3
 const nthChars = (str, num) => {
  let newSTR = '';
  for(let i = num-1; i < str.length; i+=num){
    newSTR +=str[i];
  }
  return newSTR;
 }

console.log(nthChars("Java", 2)    )  //-> "aa"
console.log(nthChars("JavaScript", 5)) // -> "St"
console.log(nthChars("Java", 3)     )  // -> "v"
console.log(nthChars("Hi", 4)       )  // -> ""
console.log(nthChars("0123456789", 2)) // -> "13579"

// Task - 4
const  canFormString = (str1, str2) => {
  let answer = true;
  str2 = str2.split(' ').join('');
  for(let i = 0; i < str2.length; i++){
    if(!str1.toLowerCase().includes(str2[i].toLowerCase())){
       answer = false;
       
    }else{
      str1 = str1.replace(str2[i],'')
    }
  }
  return answer;
}
console.log(canFormString("Hello", "Hi"))                    //-> false
console.log(canFormString("programming", "gaming"))          // -> true
console.log(canFormString("halogen", "hello") )              // -> false
console.log(canFormString("CONVERSATION", "voices rant on")) // -> true
console.log(canFormString("12", "123"))                      //  -> false

// Task - 5
 const isAnagram = (str1, str2) => {
 str1 = str1.split(' ').join('').toLowerCase();
 str2 = str2.split(' ').join('').toLowerCase();

 for(let i = 0; i < str2.length; i++){
 str1 = str1.replace(str2[i], '')
 }
 return str1.length === 0
 } 

console.log(isAnagram("Apple", "Peach"))              //-> false
console.log(isAnagram("listen", "silent"))            //-> true
console.log(isAnagram("astronomer", "moon starer"))   //-> true
console.log(isAnagram("CINEMA", "iceman"))            // -> true

// Task - 6
const count = (arr, bool) => {
  let num = 0;
  
    bool ? num = Math.floor(arr.length / 2) : num = Math.floor(arr.length / 2) + 1
    
    return num;
  }

console.log(count([1, 5, 10], true))         //-> 1
console.log(count([3, 7, 2, 5, 10], false))  //-> 3
console.log(count([-1, 1, -2, 2], true))     //-> 2
console.log(count([0, -1, 15, 1], false))    //-> 3
console.log(count([1, 2, 3, 4, -4], true))   //-> 3

//  Task - 7
const sumDigitsDouble = str  => str.split('').filter(el => {if(el > 0 && el <= 9 ) return el  })
.map(el => el*2)
.reduce((acc, cur) => {return acc = acc + cur}, 0)

console.log(sumDigitsDouble("Javascript"))  //-> -1
console.log(sumDigitsDouble("23abc45"))     //-> 28
console.log(sumDigitsDouble("Hi-23") )      //-> 10
console.log(sumDigitsDouble("ab12"))        //-> 6
console.log(sumDigitsDouble("n0numh3r3"))   //-> 12

