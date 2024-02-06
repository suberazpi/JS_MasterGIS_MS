const data = ['hola', 2, 5, 'adios']

resultado_1 = data[1]>data[2]

resultado_2 = data[2]>data[1]

console.log ("Para la condición de que el segundo valor del array sea mayor que el tercero se determina que el resultado es: ", resultado_1)
console.log ("Para la condición de que el tercer valor del array sea mayor que el segundo se determina que el resultado es: ", resultado_2)

arit_1= data[1]+data[2]
arit_2a= data[1]-data[2]
arit_2b= data[2]-data[1]
arit_3= data[1]*data[2]
arit_4a= data[1]/data[2]
arit_4b= data[2]/data[1]
arit_5a= data[1]%data[2]
arit_5b= data[2]%data[1]

console.log ('\n')
console.log ("Aplicando el operador aritmético de suma se puede obtener como resultado: ", arit_1)
console.log ("Aplicando el operador aritmético de resta se puede obtener como resultado ", arit_2a , ", pero tambien se puede obtener ", arit_2b)
console.log ("Aplicando el operador aritmético de producto se puede obtener como resultado: ", arit_3)
console.log ("Aplicando el operador aritmético de cociente se puede obtener como resultado ", arit_4a , ", pero tambien se puede obtener ", arit_4b)
console.log ("Aplicando el operador aritmético de resto se puede obtener como resultado ", arit_5a , ", pero tambien se puede obtener ", arit_5b)
