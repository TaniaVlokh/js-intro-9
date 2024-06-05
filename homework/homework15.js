const toCamelCase = str => {
  if(!str.includes(' ')) return str;
  str = str.trim().split(' ')
 

 //console.log(str)
  for(let i = 0; i < str.length; i++){
   str[0] = str[0].toLowerCase()
   if(str[i] !== 0){
    str[i] = str[i].toLowerCase().toUpperCase()
   }
   str[i] = str[i][0] + str[i].slice(1).toLowerCase()
  }

return str.join('').replaceAll('undefined', '');
}
console.log(toCamelCase("first name"))              //->"firstName"
console.log(toCamelCase("last     name"))           //->"lastName"
console.log(toCamelCase("   ZIP CODE"))             //->"zipCode"
console.log(toCamelCase('I Learn Java Script'))     //-> "iLearnJavaScript"
console.log(toCamelCase('helloWorld'))              //-> “helloWorld”


// Task 2 
const toSnakeCase = str => str.trim().split(' ').filter(el => el).map(el => el.toLowerCase()).join('_')

console.log(toSnakeCase("first name"))              // ->"first_name"
console.log(toSnakeCase("last    name"))            // ->"last_name"
console.log(toSnakeCase("    I love Java Script"))  // ->"i_love_java_script"
console.log(toSnakeCase("already_snake_case"))      // -> "already_snake_case"
console.log(toSnakeCase("hello"))                              // -> "hello

// Task - 3
const alternatingCases = str => str.toLowerCase().split('').map((el, i) => i % 2 === 0 ? el.toUpperCase() : el).join('')

console.log(alternatingCases("Hello"))        //-> "HeLlO"
console.log(alternatingCases("basketball"))   //-> "BaSkEtBaLl"
console.log(alternatingCases("Tech Global"))  //-> "TeCh GlObAl"
console.log(alternatingCases("") )            //-> ""
console.log(alternatingCases("123!@#aB"))     //-> "123!@#Ab"

// Task - 4 

const isNeutral = (str1, str2) => {
    if (str1.length !== str2.length) return `Strings with different length`;
    let res = '';
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] === '+' && str2[i] === '+') res += '+';
      else if (str1[i] === '-' && str2[i] === '-') res += '-';
      else res += '0';
    }
    return res;
  }


console.log(isNeutral("-", "+"))               // ->  "0"
console.log(isNeutral("-+", "-+"))               // ->   "-+"
console.log(isNeutral("-++-", "-+-+"))           // ->  "-+00"
console.log(isNeutral("--++--", "++--++"))       // ->  "000000"
console.log(isNeutral("+++", "+++"))             // ->  "+++"

  // Task - 5 
  const isTrueOrFalse = (str) => {
    const words = str.toUpperCase().split(' ');
    return words.filter(x => 'ABCDEFGHIJKLM'.includes(x[0])).length >= words.filter(x => 'NOPQRSTUVWXYZ'.includes(x[0])).length
  }

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit"))  //-> true
console.log(isTrueOrFalse("Xylophones can obtain Xenon."))         //->  false
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK"))        //-> true
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe"))     //-> true