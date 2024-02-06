const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age:24, premium: false},
    {username: 'maria3', age:36, premium: false},
    {username: 'abc123', age:20, premium: true},
    {username: 'sergio58', age:26, premium: true}];


for (j=0; j<5; j++){
    if (users[j].premium === true) {
        console.log ("El usuario ", users[j].username, " es un usuario premium")
    }
}
let b = []
for (h=0; h<5; h++) {
    if (users[h].premium === false) {
        b[h] = users[h].username
    }
}
console.log ("Los usuarios no premium son: ", b)
