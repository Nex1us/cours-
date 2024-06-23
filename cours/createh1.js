const body = document.querySelector("body"); // il n'y a qu'une balise body
console.log(body);

function createH1(titre){
    const h1 = document.createElement("h1");
    h1.textContent = titre;
return h1;
}
console.log(body);

body.appendChild(createH1 ("Titre")); // "Titre" est un argument passé a la Fonction
body.appendChild(createH1 ("Titre 1"));
body.appendChild(createH1 ("Titre 2"));
body.appendChild(createH1 ("Titre 3"));

// function createH1React (titre){
    //return <h1 class ="">{titre}</h1>;
// }

function mySection(titre, texte) {
    const h1 = document.createElement("h1");
    h1.textContent =titre;
    const p = document.createElement("p");
    p.textContent = texte; 
    const section = document.createElement("section");
    section.appendChild(h1);
    section.appendChild(p);
    return section; 
}
const uneSection = mySection("un Titre", "Un paragraphe...");
body.appendChild(uneSection);