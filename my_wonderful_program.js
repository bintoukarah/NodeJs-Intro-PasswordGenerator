// // ALL IMPORT MODULE //
// import clipboard from 'clipboardy';
// import yargs from 'yargs';
// import { hideBin } from 'yargs/helpers'
// ///////////////////////////////////////////////////////////////////////
// // FUNCTION TO PRINT RANDOM PASSWORD 
// function makePassword(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() *
//             charactersLength));
//             clipboard.writeSync(result) //  Pour récuperer l'information et la stocker dans la mémoire
//     }
//    ;
//     return result
// }
// console.log(makePassword(5));
// ///////////////////////////////////////////////////////////////////////:
// yargs(hideBin(process.argv)) // Créer une commande dans le terminal
//   .command('pwgen', 'generate password', () => {}, (argv) => {
//     console.info("longueur pwd :" + argv._[1])
//     if (argv) {
//         console.log("I printed the password");
//     }
//   })
//   .demandCommand(1)
//   .parse()

////////////////////////////////////////////::: KAMAL CODE
import clipboardy from 'clipboardy';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import ansiColors from 'ansi-colors';


function makePwd(length) {
/// my function variable
  let result  = '';
  const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
///////////////////////////////////////////////
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result
}

yargs(hideBin(process.argv))
  .command('pwgen', 'generate password', () => {}, (argv) => {
    console.log(argv)
    console.info("longueur pwd :" + argv._[1])
    let pwdlength = argv._[1]
    let pwd = makePwd(pwdlength)
    console.log(pwd);
    if (argv.c) {
      
      clipboardy.writeSync(pwd);
      console.log("je copie le mot de passe");
    }
  })
  .demandCommand(1)
  .parse()

let specialCharacters = /\d/

  for (let i = 0; i < pwd.length; i++) {
     if (specialCharacters pwd[i]) {
       
     }
    
  }

