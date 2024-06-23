// fonction
const body = document.querySelector("body");    

function createSection() {

    
    
    const newSection = document.createElement("section");
    console.log(newSection);
    
body.appendChild(newSection);

// h2

const newH2 = document.createElement("h2");
newH2.textContent = "section 3";
newSection.appendChild(newH2);

// p
const newP = document.createElement("p");
newP.textContent = 
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem deserunt voluptates soluta, perspiciatis quis ducimus. Voluptatem similique beatae, amet impedit dolor maiores non omnis harum minus, totam incidunt iure!";
newSection.appendChild(newP);

body.appendChild(newSection);
}
for (let i = 1; i <= 100; i++){

    createSection();
}