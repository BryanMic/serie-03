nombre = prompt("indiquer un nombre d'étoiles à afficher.")
etoiles = "*"
etoile = "*"
final = " "
 

while  (nombre>11 || nombre<0) {
    console.log("Le nombre d'étoile n'est pas correct»");
    nombre = prompt("indiquer un nombre d'étoiles à afficher.");

    
}  

for (let i = 0; i < nombre; i++) {
    console.log(etoiles);
    etoiles = etoiles +etoile;
    
}
