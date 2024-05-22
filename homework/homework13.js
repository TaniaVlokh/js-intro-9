// Task - 1
const countVC = str => {

  let obj = {};

  obj.vowels = str.split('').filter((el) => 
    'oiuea'.includes(el.toLowerCase())).length
  obj.consonants = str.split('').filter((el) => 
    (el.toLowerCase() >= 'a' && el.toLowerCase() <= 'z')
    && !'oiuea'.includes(el.toLowerCase())).length

  return obj;
}

console.log(countVC("Hello")); //      -> { vowels: 2, consonants: 3 }
console.log(countVC("Programming")); //-> { vowels: 3, consonants: 8 }
console.log(countVC("123AbC")); //     -> { vowels: 1, consonants: 2 }
console.log(countVC("123!@#xyz")); //  -> { vowels: 0, consonants: 3 }
console.log(countVC("")); //           -> { vowels: 0, consonants: 0}


// Task - 2
const countChars = str => {
  str = str.trim();
  let obj = {};
  obj.letters = str.split('').filter((el) => 
    (el.toLowerCase() >= 'a' && el.toLowerCase() <= 'z')).length;

  obj.numbers = str.split('').filter((el) => 
    el >= '0' && el <= '9').length;


  obj.specials = str.split('').filter((el) => 
    !(el >= 0 && el <= 9) && !(el.toLowerCase() >= 'a' && el.toLowerCase() <= 'z')).length;
 
  return obj;
}

console.log(countChars("Hello") )                         // -> {letters: 5}
console.log(countChars("Programming 123"))                // -> {letters: 11, numbers: 3}
console.log(countChars("123AbC!@#"))                      // -> {letters: 3, numbers: 3, specials: 3}
console.log(countChars("0987654321") )                    // -> {numbers: 10}
console.log(countChars("     ") )                         //        -> {}
console.log(countChars("") )                              //        -> {}

// Task - 3
const maxOccurrences = str => {

  if (str.trim().length < 1) return '';
  else {
    const obj = {};
    str.toLowerCase().split("").filter(x => x !== " ").forEach(el => (!obj[el]) ? obj[el] = 1 : obj[el]++);
    return Object.entries(obj).reduce((max, el) => el[1] > max[1] ? el : max)[0];
  }

}

console.log(maxOccurrences("Hello"))           // -> "l"
console.log(maxOccurrences("Occurrences"))     // -> "c"
console.log(maxOccurrences("    ab    "))      // -> "al"
console.log(maxOccurrences("12   3   21"))     //-> "1"
console.log(maxOccurrences("      "))          //-> ""

// Task - 4 
const starOut = (str) => str.split('').filter(x => x === '*').length === str.length ? '' : str.replace(/([^*]|^)\*{1,2}([^*]|$)/g, '');


console.log(starOut("ab*cd"))    // -> "ad"
console.log(starOut("ab**cd"))   // -> "ad"
console.log(starOut("xm*sm*sy")) // -> "xy"
console.log(starOut("abc"))      // -> "abc"
console.log(starOut("***"))      //  -> ""
console.log(starOut("   ") )     //  -> "   "
console.log(starOut(""))         //  -> ""

// Task - 5

const romanToInt = str => {
  let result = 0;
  str = str.split('');
  let n = str.length

  for(let i = 0; i <= str.length; i++){
    if(str[i] === 'I'){
      result += 1;
    }else if(str[i] === 'V'){
      result += 5;
    }else if(str[i] === 'X'){
      result += 10;
    }else if(str[i] === 'L'){
      result += 50;
    }else if(str[i] === 'C'){
      result += 100;
    }else if(str[i] === 'D'){
      result += 500;
    }else if(str[i] === 'M'){
      result += 1000;
    }
  
}
return result;
}

console.log(romanToInt("I"))                //-> 1
console.log(romanToInt("IV"))               // -> 4
console.log(romanToInt("CXII") )            //-> 112
console.log(romanToInt("MMM"))              // -> 3000
console.log(romanToInt("MMMDCCCLXXXVIII"))  // -> 3888
console.log(romanToInt("MDCLXVI"))          // -> 1666



