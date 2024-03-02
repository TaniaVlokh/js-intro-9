const favMovies = ['Harry Potter', 'Godfather', 'Lord of rings'];

// Destrcturing - not preferred
const fav1 = favMovies[0];
const fav2 = favMovies[1];
const fav3 = favMovies[2];

// better version

const [ fav01, fav02, fav03] = favMovies;    // const [ , fav02, fav03] -> put ',' to skip first one

console.log(fav1);
console.log(fav01);

const credentials = ['TechGlobalSchool', 'Test123', 'techglobal@gmail.com'];
const [ userName, password, email ] = credentials;

console.log(`Mu username  is ${userName}, my password is ${password}, my email is ${email}`);

function middleWay(a, b){
    let[one,aNum, gig] = a;
    let[gth,bNum,juu ] = b;
  return aNum, bNum;
  }
  const arr1 = [0,3,4];
  
  

  function has23(nums){
    return nums.includes(2) || nums.includes(3);
  }
  console.log(has23(arr1));

  function fix23(nums){
    for(let i = 1; i < nums.length; i++){
      if(nums[i-1] === 2 && (nums[i] === 3) {
        nums[i] = 0;
         }
    return nums;
  }