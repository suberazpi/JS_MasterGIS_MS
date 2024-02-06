let DNInum = prompt("Introduce tu número de DNI aquí: ", "ej. 12345678")
const DNIletra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
if (DNInum<0 || DNInum>99999999) {
    alert("El número introducido no es válido")
} else {
    DNIresto = DNInum%23;
    alert("La letra de tu DNI es " + DNIletra[DNIresto])
}
