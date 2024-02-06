// Number of links in the document:
let Nlink = document.links.length;
console.log (Nlink)
// URL penultimo enlace
let lasturl = document.links[(document.links.length - 2)].href;
console.log (lasturl)
// Número de enlaces en el 3º párrafo
let count3p = document.getElementById("third-paragraph").innerHTML;
console.log (count3p)
/* No cuenta los links
let link3p = document.links.length;
console.log (link3p)
*/