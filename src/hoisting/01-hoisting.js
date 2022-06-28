// var elmo = undefined // declaración inteligente
// console.log(`mi nombre es ${elmo}`);
// var elmo = "elmo";


greeting();

function greeting() {
    console.log(`Hola como estas ${elmo}`);
}
var elmo = "elmo";

console.log( [1, 2, 3].map((num) => {
    if (typeof num === 'number') return;
    return num * 2;
  }));
  
  nameOfDog("Elmo"); 
  function nameOfDog(name) 
  { console.log(name); }