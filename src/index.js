// Antes de ES6
function newFuntion(name,age,country){
    var name= name || 'brahian';
    var age = age || 25;
    var country = country || 'col';
    console.log(name,age,country);
}

// ES6
function newFuntion2(name = 'brahian', age= 25, country="COL"){
    console.log(name,age,country)
};
newFuntion2();
newFuntion2('felipe', '23','col');

//
let hello = 'Hello';
let world = 'World';
let epic= hello + ' ' + world;

// Template literals
let epic2= `${hello} ${world}`
console.log(epic2)


let lorem = `lorem consequetur. commodi. Ipsum vel
                Otra frase
            `

let person = {
    'name': 'Brahian',
    'age': 23,
    'country': 'CO'
}
// Desestructurar Elementos que se necesitan
let { name, age,} = person;
console.log(name,age)

// Operador de propagación
let team1 = ['Oscar','Brahian','Felipe']
let team2 = ['fel','Bra','Era']

let education = ['Ant', ...team1,...team2]
console.log(education)

// var let const

let name = 'Brahian';
let age = '26';

// ES5
// obj = { name : name , age : age}

// ES6
obj2 = { name, age};
// console.log(obj2)

const names = [
    {name: 'Brahian', age: '26'},
    {name: 'felipe', age: '32'}
]
// función anonima
let listOfNames = names.map(function (item) {
    console.log(item.name)
})

// Arrow Functions
let listOfNames2= names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
}

const listOfNames4 = name => {
}

const square = num => num * num;

// Promesas... Algo va a pasar en algún momento
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        } else {
            reject('Noo');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error))

// Clases
    class calculator {
    // metodo para inicializar clase
    constructor(){
        // variables disponibles en scope global
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,8))

// modulos
// import {hello}  from './module.js'
const hello = require ('./module')
console.log(hello());


// Generadores
// funcion especial que retorna una serie de valores según el algoritmo definido
function* helloWorld() {
    if (true){
        // Yield guarda este estado de forma interna
        yield 'Hello, ';

    }
    if (true) {
        yield 'World'
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)