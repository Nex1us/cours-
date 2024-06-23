const tab = ["pierre", "apul" , "manu"];
console.log(tab, typeof tab);
console.log(tab[3]); // undefined
console.log("tout va bien");
tab.unshift ("guy");
console.log(tab);
tab.push ("joseph");
console.log(tab);
tab.pop();
console.log(tab);
tab.shift();
console.log(tab);
// delete tab[0];
console.log(tab);

const fille =["jasmine", "thea"];
const ttLeMonde = fille.concat(tab);
console.log(ttLeMonde);
console.log(tab.toString());

const slicedTab = ttLeMonde.slice(3);
console.log(slicedTab);

console.log(tab);

tab.splice(1, 0, "Guy");
console.log(tab);