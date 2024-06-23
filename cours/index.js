console.log("Hello, World !");

let nombre = 10;
console.log("La valeur de la variable nombre est : " , nombre);

// let foisDeux = nombre * 2;
// console.log(foisDeux);

let message = "une chaîne de caractère";
console.log(message);

// un booléen

let vraiFaux = true;
console.log(vraiFaux);

// tableau d'entiers
let tableauEntiers =[1, 2, 3, 4, 5];
console.log(tableauEntiers);

// tableau de chaînes (string)
let tableauChaînes = ["Pierre" , "Paul", "Jacques"];
console.log(tableauChaînes);


// tableau mélangé
let tableauMélangé = ["Toto", 12, "Truc"];
console.log(tableauMélangé);


let n = 2;   // declaration + affectation
 n = 3; // affectation

console.log(n);

console.log("tout va bien");
if (true) {
    var tata = "tata"; // varaibale globale
}
console.log("tata");

if (true) {
    let toto = "toto" // la variable toto n'est accessilbe que dans le blocs if
}
// console.log(toto);

console.log(typeof nombre); // number
console.log(typeof message); // string
console.log(typeof vraiFaux); // boolean
console.log(typeof tableauEntiers); // object
console.log(typeof tableauMélangé); // object

let muche 
console.log(typeof muche); // undefined