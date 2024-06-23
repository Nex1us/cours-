const nblignes = 20;

for (let i = 1 ; i <= nblignes; i++) {
    let str = ""
 for (let j = 1; j <= i; j++) {
     // construire une chaines de caracteres qui concatene les valeurs de j
     str = str + j + " ";
    }   
    
    console.log(str); 
}