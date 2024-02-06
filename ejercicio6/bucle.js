const notas=[6,7,2,9,3,4,5,8,2]
let x=0
let z=0
var rev = 6+7+2+9+3+4+5+8+2

for (let i=0; i<9; i++) {
    x += notas[i]
}

for (const j of notas) {
    z += j
}


console.log("El valor final al ejecutar el bucle for es ", x)
console.log("El valor final al ejecutar el bucle for of es ", z)
console.log("Utilizando operadores de suma se comprueba que el resultado de sumar el array es ", rev)
