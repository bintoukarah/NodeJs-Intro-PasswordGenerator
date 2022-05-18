import clipboard from 'clipboardy';

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
console.log(makeid(5));

// let result = '';
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let charactersLength = characters.length;

// makePassword('length', () => {
//     for (let i = 0; i < length; index++) {
//         result += characters.charAt(Math.floor(Math.random()
//         * charactersLength));
//     }
// })
// console.log(makePassword(5));