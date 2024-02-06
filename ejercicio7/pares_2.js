
function sumArray(vect) {
    var x=0
    for(i=0; i<vect.length; i++) {
        if ((vect[i]%2)===0){
            x += vect[i] }
        }
    return x;
}

/* let vector=[]
for (j=0; j<8; j++) {
    let a = prompt("Crea un array: ", "Introduce un número entero")
    vector[j] = a
} */

const vector = [6, 45, 9, 5, 37, 20, 11, 35, 8]

const suma = sumArray(vector)
console.log ("La suma de las cifras pares del vector " + vector + " es de " + suma)
