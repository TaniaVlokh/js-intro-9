
function generateRandomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function minOfArray(arr){
    return Math.min(...arr)
}

function maxOfArray(arr){
    return Math.max(...arr)
}
//Exporting your reusable methods
module.exports.generateRandomNumber = generateRandomNumber;
module.exports.minOfArray =minOfArray;
module.exports.maxOfArray = maxOfArray;

// 2 -> Exporting all the methods as Object

// module.exports.MathHelper = {
//     generateRandomNumber,
//     minOfArray,
//     maxOfArray
// }



// 3 -> way to export AS A CLASS
// class MathHelper{
//     static generateRandomNumber(a, b) {
//         let max = Math.max(a, b);
//         let min = Math.min(a, b);
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
    
//     static minOfArray(arr){
//         return Math.min(...arr)
//     }
    
//     static maxOfArray(arr){
//         return Math.max(...arr)
//     }
// }
// module.exports.MathHelper = MathHelper;