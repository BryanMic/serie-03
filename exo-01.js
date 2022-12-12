nombre = prompt("indiquer un nombre d'étoiles à afficher.")
etoile = "*"
final = " "
 

if (nombre<11 && nombre>0) {
    
    console.log(etoile.repeat(nombre));
       


}  
else {

    console.log("Le nombre d'étoile n'est pas correct»");
}

