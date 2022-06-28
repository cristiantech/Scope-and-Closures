// variables
var a; // declaramos
var b = "b"//declara y asignar
b = "bb" //reasignacion
var a = "bb" // redeclaracion

// global Scope

var fruit = "Apple"
function bestFruit(){
    console.log(fruit);
}
bestFruit();


function countries (){
    country = "Colombia"
    console.log(country);
}
countries()
console.log(country);