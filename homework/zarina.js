// sort array

const arr = [8, 3, 12, 56, 9, 12];

for(let i = 1; i < arr.length; i++){
    let temp = 0;
    if(arr[i-1] > arr[i]){
        temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
    }
}
console.log(arr);

// found max value
let max = arr[0];
for(let i = 1; i < arr.length; i++){
    if(arr[i]> max){
        max = arr[i];
    }
}
console.log(max);

function firstDuplicate(arr){
    
    for(let ele of arr){
        if(arr.indexOf(ele) !== arr.lastIndexOf(ele))
        return ele;
    }
    return -1;
}
console.log(firstDuplicate([0,3,-1,3,9]))

function getDuplicates(arr){
let container = [];
let allDuplicates = [];

for(let i = 0; i < arr.length; i++){
    if(container.includes(arr[i]) && !allDuplicates.includes(arr[i])){
        allDuplicates.push(arr[i]);  
}else{
    container.push(arr[i]);
}
}
return allDuplicates;

}
console.log(getDuplicates([10,15,90,10,15,0,15,10]));



function reverseString(str){

    str = str.split(' ');
    console.log(str);
    const arr = [];

    for(let i = 0; i < str.length; i++){
        let word = str[i].split('').reverse().join('');
        arr.push(word);
    }
    return arr.join(' ');


}
console.log(reverseString('Hello World'));



