const maChaine = " I love coding !";
console.log(maChaine, typeof maChaine );

const withJs = "with Javascript";

let message = maChaine + withJs;
console.log(message, typeof message);
const year = "2024";

message += " since " + year;
console.log(message, typeof message);

const prenom = "Toto";
const age = 10; 
const message2 = " Je m'appelle " + prenom + " et j'ai " + age + " ans ";
console.log(message2, typeof message2);

const message3 = `Je m'appelle ${prenom} et j'ai ${age} ans`; // template string
console.log(message3, typeof message3);


// console est un objet et log une methode
//indexof est un methode qui peut être appliqué sur une string
//substr pour chercher une sous-chaine


const text = "how are you doing today ? ";
const myArray = text.split(" ")
console.log(myArray, typeof myArray);
console.log(text.length);
console.log(text.split(" "));


const visit = "Visit Microsoft";
const visitReplace = visit.replace("Microsoft", "W3Schools");
console.log(visitReplace);
console.log(visit.toUpperCase());

console.log(visit[6]);