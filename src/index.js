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



const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve ('Hello world'), 3000)
            : reject(new Error('Test Error'))
    })
};


// Async y await valores en funciones para identificar que se va acomportar de manera distinta para ser mas claros al construir este tipo de funciones        y trabajar mejor forma con el asincronismo

const helloAsync = async () => {
    // Hace llamado y espera a que esto suceda
    const hello = await helloWorld();
    console.log(hello)
};

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error)
    }
}

anotherFunction();