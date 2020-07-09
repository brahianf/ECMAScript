// Object.entries devolver claves y valores de una matriz
const data = {
    frontend: 'Brahian',
    backend: 'Felipe',
    design: 'Erazo',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length)

// Object Values devuelve los valores de un objeto a un arreglo de Strings con valores
const data2 = {
    frontend: 'Brahian',
    backend: 'Felipe',
    design: 'Erazo',
}
const values= Object.values(data2);
console.log(values)
console.log(values.length)

// Padding: anteponer o agregar una cadena vacia o elementos al String
const string = 'hello';
console.log(string.padStart(8,'hi '))
console.log(string.padEnd(12,' ----'))

