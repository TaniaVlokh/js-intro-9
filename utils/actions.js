
class Actions{

    static visitUrl(url){
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
            if(url.startsWith('www') || url.startsWith('https:/'))
            resolve('URL visited successfully');
        else reject('Wrong URL')
        }, 1000)
    })
    }

    static login(username, password){

        return new Promise((resolve, reject)=> {
            setTimeout(()=> {
            if(username === 'Techglobal' && password === 'Test1234')
            resolve('Logged in successfully');
             else reject ('Wrong credentials')
        }, 3000)
    })
    }

    static validateTitle(title){
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
            if(title !== '' && title !== undefined && title !== null)
            resolve('Title validated successfully')
        else reject ('Wrong title')

        }, 500)
    })
    }

    




}
module.exports.Actions = Actions;


































// class Actions {
//     static visitUrl(url) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (url.startsWith('https://') || url.startsWith('www')) {
//                     console.log('URL visited successfully')
//                     resolve('URL visited successfully');
//                 }
//                 else reject('Wrong URL');
//             }, 1000);
//         })
//     }
//     static login(username, password) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (username === 'TechGlobal' && password === 'Test1234') {
//                     console.log('Logged in successfully');
//                     resolve('Logged in successfully');
//                 }
//                 else reject('Wrong credentials');
//             }, 3000);
//         })
//     }
//     static validateTitle(title) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (title !== '' && title !== null && title !== undefined) {
//                     console.log('Title validated successfully')
//                     resolve('Title validated successfully');
//                 }
//                 else reject('Wrong title');
//             }, 500);
//         })
//     }

// }

// module.exports.Actions = Actions;