nombre = prompt("indiquer un nombre d'étoiles à afficher.")
etoile = "*"
final = " "
 

while  (nombre>11 || nombre<0) {
    console.log("Le nombre d'étoile n'est pas correct»");
    nombre = prompt("indiquer un nombre d'étoiles à afficher.");

    
}  

console.log(etoile.repeat(nombre));

