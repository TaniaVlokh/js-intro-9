const{generateRandomNumber} = require('../utils/MathHelper.js');

let ran = generateRandomNumber(1, 12);
console.log(ran);

if (ran >=3 && ran <= 5){
    console.log('Spring');
}else if(ran >=6 && ran <= 8){
    console.log('Summer');
}else if(ran >=9 && ran <= 11){
    console.log('Fall');
}else{
    console.log('Winter');
}
