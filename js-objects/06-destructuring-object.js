const user = {
    username: 'john-doe',
    password: 'test1234',
    email: 'john@gmail.com',
    age: 45,
    city: 'Chicago',
    credentials: function(){
        return [this.username, this.password]
    }
}
// Object destructuring - NOT PREFFERED
// const username = user.username;
// const password = user.password;
// const email = user.email;
// console.log(username, password, email);

// PREFFERED
const {username,password,email} = user;
console.log(username, password, email);


