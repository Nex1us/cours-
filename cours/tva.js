// écrire une fonction qui calcule le prix TTC connaissant le prix HT
// le prix TTC est égale au prix HT auquel on ajoute  la TVA (ht+ht*tva)
// exmple: prix ht : 5euros 
// TVA = 20% = 20/100 = 0.2
// ttc = ht + ht*tva = 1.2*ht
// ht => ht*1.2


const prixHt = 10;
const tauxTva = 1.2;

console.log(ttc(prixHt, tauxTva));

function ttc(prix, tva) {
    return prix * tva;
}
console.log(ttc(20, 1.2));

function ttc(prix) {
    return prix * 1.2;
}