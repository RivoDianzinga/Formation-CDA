/*
const prompt = require('prompt-sync')(); // importe le module de saisie
let prenom = prompt("Votre prenom ?");
console.log(`Bonjour ${prenom} !`);
prompt n'est pas natif à Node, c'est un package externe qu'il 
faut installer
*/
// Avec le module readline
/*
Le module readline en javascript permet à l'utilisateur de saisir 
une donnée à l'écran du terminal, et le programme reprend cette 
donnée 
*/
// const readline = require('readline'); 
/*
en javascript, les modules sont importés par la commande "require"
*/

// const rl = readline.createInterface({ /* on ouvre l'interface */
//    input: process.stdin,
//    output: process.stdout
//});


// rl.question("Votre prénom ? ", (prenom) => {
//    console.log(`Bonjour ${prenom} !`);
    /*
rl.question est une fonction : 
à gauche, c'est la saisie de la donnée, et 
à droite, c'est la réponse 
*/
/* rl.question("Quel age avez-vous ? ", (age) =>{
    if (age<18) {
        console.log("Vous ètes mineur");
    } else {
        console.log("Vous ètes majeur");
    }

    rl.close(); // on ferme l'interface
}); */

/* rl.question("Votre prenom ? ", (prenom) => {
    console.log(`Bonjour ${prenom}`);
    rl.close();
}); */

N = 21
for (i=1;i<N+1;i++){
    if ((i%3)===0 && (i%5===0)) {
        console.log("FizzBuzz");
    } else if ((i%5)===0){
        console.log("Buzz");
    } else if ((i%3)===0){
        console.log("Fizz");
    } else {
        console.log(i);
    }
};