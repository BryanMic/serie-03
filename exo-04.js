let min = 1;
let max = 5;
let random = Math.round(Math.random() * (max - min) + min);
let i=0;
let nombre = 0
 do {nombre = prompt("choisissez un nombre entre 1 et 5")
 if (nombre<random) {
    prompt("le nombre est plus grand")
    i++
    
 } else if (nombre>random) {
    prompt("le nombre est plus petit")
    i++
} else {
    prompt("bien joué")
    i++

} 
    
 } while (nombre != random);
console.log(i);
