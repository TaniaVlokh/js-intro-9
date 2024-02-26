// Task - 1

function tripleWord(word){
    return word + word + word;
}
console.log(tripleWord('Tech'));

// Task - 2
function has4(str){
    return str.length >= 4;
}
console.log(has4('Body'));

// Task - 3

function celciusToFahrenheit(number){   //  (celsius * 9) / 5 + 32
    let celsius = (number * 9) / 5 + 32;

return celsius;
}
console.log(celciusToFahrenheit(21));

// Task - 4

function kgToPounds(number){

    let pound = number * 2.2;
    pound = pound.toFixed(2);

    return pound;
}

console.log(kgToPounds(5));

//Task - 5

function rectangleArea(x, y){
    let area = x * y;
    return area;
}

function rectanglePerimeter(x, y){
    let perimeter =  2 * (x + y);
    return perimeter;
}

console.log(rectangleArea(5,4));
console.log(rectanglePerimeter(5,4));

// Task - 6

function squareArea(x){
    return x * x;
}

function squarePerimeter(x){
    return 4 * x;
}

console.log(squareArea(8));
console.log(squarePerimeter(4));

function missingChar(str, n){
    let letter = str.at(n);
    return str.replace(letter,'');
  }
  console.log(missingChar('kitten', 2));


let result = '';
  for(let i = 0; i <= 6; i++){
    
     result = result + '#'
    console.log(result);
  }
  

  function doubleX(str){
  for(let i = 0; i <= str.length; i++){
  if(str.at(i) == 'x' &&  str.at(i+1) == 'x') return true;
  }
}
console.log(doubleX('axxxbb'));


function catDog(str){
    let cat = 0;
      let dog = 0;
    for(let i = 0; i <=length-2; i++){
    if(str.slice(i, i+3) === 'dog'){
    dog++;
    }
       if(str.slice(i, i+3) === 'cat'){
    cat++;
    }
    }
    return cat === dog
  
  }

  console.log(catDog('cathhjgjgjgdogdog'));