// Don't like 6 and 13 numbers
// Don;t like to get any number above 15 inclusively



for(let i = 1; i <= 20; i++){
    if(i === 6 || i === 13) continue;
    else if(i === 15) break;
    console.log('the number is', i);

}