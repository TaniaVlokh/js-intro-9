
function double(){
    return num * 2;
}

function triple(){
    return num * 3;
}

function multiplyBy4(){
    return num * 4;
}


// create product function usong currying

function multiply(num1){
    return function (num2){
        return num1 * num2;
    }
}
const muultiplyBy2 = multiply(2);
const muultiplyBy3 = multiply(3);
const muultiplyBy4 = multiply(4);
const muultiplyBy5 = multiply(5);
const muultiplyBy6 = multiply(6);


console.log(muultiplyBy3(5));



function doMath(operator){
    if(operator === '+'){
        return function (num1, num2){
            return num1 + num2;
        }
    }
    else if(operator === '*'){
        return function (num1, num2){
            return num1 * num2;
        }
    }
    else if(operator === '-'){
        return function (num1, num2){
            return num1 - num2;
        }
    }
    else if(operator === '/'){
        return function (num1, num2){
            return num1 / num2;
        }
    }
    else if(operator === '**'){
        return function (num1, num2){
            return num1 ** num2;
        }
    }

}

const power = doMath('**')
const sum = doMath('+')
const divide = doMath('/')


console.log(power(3,2 ))