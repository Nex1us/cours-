const age = 89;

if (age < 18) {
    console.log("pas de catégorie");

} else if (age <= 19) {
    console.log("junior");

} else if (age <= 22) {
    console.log("espoir");

} else if (age <= 39) {
    console.log("sénior");

} else {
    console.log("vétéran");
}

// ou on peut écrire

// const message = "la messagerie est"
// let categorie =""
// if (age < 18) {
//     categorie ="pas de catégorie";

// } else if (age <= 19) {
//     categorie ="junior";

// } else if (age <= 22) {
//     categorie ="espoir";

// } else if (age <= 39) {
//     categorie ="sénior";

// } else {
//     categorie ="vétéran";
// }

// console.log(message + categorie)