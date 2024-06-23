const tableau = [2, 5, 3, 10, 99, 1, 80];
let somme = 0;
for (let i = 0; i < tableau.length; i++) {
    somme = somme + tableau[i];
    
}
console.log(somme); // somme des elements d'un tableau 


let max = tableau[0];
for (let i = 1; i < tableau.length; i++){
    if (tableau[i] > max) {
        max= tableau[i];
    }

}
console.log(max); // max des valeurs d'un tableau

let min = tableau[0];
for (let i = 1; i < tableau.length; i++){
    if (tableau[i] < min) {
        min = tableau[i];
    }

}
console.log(min); // min des valeurs d' un tableau