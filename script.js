// Date le variabili John e Doe mostra in console
let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName);

// Crea un oggetto con determinate proprieta'
const charachters = {
    name: "Ilde",
    surname: "Stramandinoli",
    email: "ildestram@gmail.com"
};
delete charachters.email;
console.log(charachters);

// Array contenente dieci stringhe
let tenStrings = ["Massimo", "Rita", "Fortunato", "Paolo", "Ilde", "Maria", "Francesca", "Mascio", "Marco", "Aaron"];
// Mostra in console ogni stringa
console.log(tenStrings);

// Array contenente 100 numeri random
const array = Array.from({length: 10}, () => parseInt(Math.random() * 100));
console.log(array);
// Trovare valore massimo e valore minimo
console.log(Math.min.apply(Math, array));
console.log(Math.max.apply(Math,array));

// Creo un array di array in cui valore figlio ha dieci numeri random
// let arrayLength = 10
let arrayOfArray = [
    [],
    [],
];
// arrayOfArray[0].length = 10
function randumNumber (){
    let num = Math.floor(Math.random() * 10);
    // for(let i = 0; arrayOfArray[0] <= 10; i++){
    //     arrayOfArray[0].push(num);
    // }
    // arrayOfArray[0].push(num);
    // arrayOfArray[1].push(num);
    console.log(arrayOfArray);
}
randumNumber();



