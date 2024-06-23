const titre = document.querySelector("#titre"); // tout ce qui suit apres un point est appele une methode + tjr penser a faire un const
titre.innerHTML = "<p>JS</p>";
console.log(titre, typeof titre);

// const titreById = document.getElementById ("titre");
// console.log(titreById, typeof titreById);

const sections = document.querySelectorAll ("section"); // ("section:nth-child(1)")
console.log(sections[1]); // le [1] sert a viser une section precise et uniquement celle-ci

const pGreen = document.querySelectorAll (".green");
console.log(pGreen);
titre.style.color = "yellow";


// pGreen[0].style.color = "green";
// pGreen[1].style.color = "green";

for (let i = 0; i < pGreen.length; i++) {
    pGreen[i].style.color = "green"
}

// const tableauEntier = [0, 1, 2, 3, 4];
// for (let i = 0; i < tableauEntier.length; i++) {
//     console.log(tableauEntier[i]);
// }

const paragraphe = document.querySelectorAll("p");
paragraphe[3].classList.add("blueCss");
// paragraphe[3].classList.remove("blueCss");


console.log(paragraphe);