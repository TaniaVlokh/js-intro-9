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