let array = [1,2,3, [1,2,3, [1,2,3]]];

// Flat nivel de profundidad de matriz 
console.log(array.flat(4));


let array2 = [1,2,3,4,5]
// Flat map mapear cada elemento con funcion según el resultado
console.log(array2.flatMap(value => [value, value * 2 ]));

// Eliminar espacion en blanco de String
let hello = '       hello World';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'hello World           ';
console.log(hello2);
console.log(hello2.trimEnd());

// Optional cash bilding, parametro opcional en catch
try {
    
} catch {
    error
}

// Transformar clave valor en objeto
let entries = [["name","brahian"], ["age",45]];
console.log(Object.fromEntries(entries));

// Objeto de tipo simbolo, acceder a descripcion de un objeto de tipo simbolo
let mySimbol = `My simbol`;
let symbol = Symbol(mySimbol)
console.log(symbol.description);