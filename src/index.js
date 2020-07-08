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

