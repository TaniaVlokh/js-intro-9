
const {Actions} = require('../utils/Actions.js')

async function test1(url, username, password, title){
    try{
    const data1 = await Actions.visitUrl(url);
    console.log(data1)
    const data2 = await Actions.login(username, password)
    console.log(data2)
    const data3 = await Actions.validateTitle(title);
    console.log(data3)
    }
    catch(err){
        console.log(err)
    }

}
console.log(test1('www', 'Techglobal', 'Test1234', ''))





































// const {Actions} = require ('../utils/actions.js');


// //task-7

// function test1(url, username, password, title) {
//     Actions.visitUrl(url)
//     .then(() => Actions.login(username, password))
//     .then(() => Actions.validateTitle(title))
//     .catch(err => console.log(err));
// }

// // task-8
// async function test2(url, username, password, title) {
//     try {
//         await Actions.visitUrl(url);
//         // console.log(res1);
//         await Actions.login(username, password);
//         await Actions.validateTitle(title);
//     } catch (err) {
//         console.log(err);
//     }
// }

// // task-8
// async function test2(url, username, password, title) {
//     try {
//         await Actions.visitUrl(url);
//         // console.log(res1);
//         await Actions.login(username, password);
//         await Actions.validateTitle(title);
//     } catch (err) {
//         console.log(err);
//     }
// }

// test1('www', 'TechGlobal', 'Test1234', 'Test');
// test2('www', 'TechGlobal', 'Test1234', 'Test');

// test1('www', 'TechGlobal', 'Test1234', 'Test');
// test2('www', 'TechGlobal', 'Test1234', 'Test');