import clipboard from 'clipboardy';

function makePassword(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
            clipboard.writeSync(result) //  Pour récuperer l'information et la stocker dans la mémoire
    }
   ;
    return result
}
console.log(makePassword(5));









