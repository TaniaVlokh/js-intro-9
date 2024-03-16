// Task - 1

const noSpace = (str) =>  str.split(/\s+/).join('');
console.log(noSpace(""))                  //->  ""
console.log(noSpace("Javascript"))        //->  "Javascript"
console.log(noSpace("    Hello   "))      //-> "Hello"
console.log(noSpace(" Hello        World   "))   //-> "HelloWorld”
console.log(noSpace("Tech Global"))       //-> "TechGlobal"

// Task - 2

const replaceFirstLast = (str) =>{
   str = str.trim();
    if(str.length < 2) return "";
let lastLetter = str.at(-1);
str = str.replace(lastLetter, str[0])
return lastLetter + (str.slice(1))
}
console.log(replaceFirstLast(""))               // ->  ""
console.log(replaceFirstLast("Hello"))          // ->  "oellH"
console.log(replaceFirstLast("Tech Global"))    // -> "lech GlobaT"
console.log(replaceFirstLast("A"))              // -> ""
console.log(replaceFirstLast("    A      "))    // -> "


// Task - 3

const hasVowel = (str) => str.toLowerCase().split('').filter(x => 'aiueo'.includes(x)).join('') ?  true :  false;


console.log(hasVowel(""))             // -> false
console.log(hasVowel("Javascript"))   // -> true
console.log(hasVowel("Tech Global"))  // -> true
console.log(hasVowel("1234"))         // -> false
console.log(hasVowel("ABC"))          // -> true
