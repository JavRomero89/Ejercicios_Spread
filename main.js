let item = ["Egg", 0.25, 12];
// let name = item[0];
// let price = item[1];
// let quantity = item[2];

const [string,decimal,int]= item;

console.log(`Item: ${string}, Quantity: ${int}, Price: ${decimal}`);

//Reescribe el código para asignar a cada variable el número correcto.

let numbers = [3, 5, 4, 2, 6, 1];
// let [one, two, three, four, five, six] = numbers;

let [three,five,four,two,six,one]=numbers;

console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);


//Tenemos el objeto user. Desestructura sus propiedades en las variables name, age y isAdmin (esta última no existe, tendrás que crear un valor predeterminado false).

let user = { name: "John", age: 30 };

let {name,age,isAdmin=false} = user;

console.log(name); 
console.log(age); 
console.log(isAdmin); 

//Reescribe el código para desestructurar el array.

let person = [12, "Chris", "Owen"];

// let firstName = person[1];
// let lastName = person[2];
// let age = person[0];

let [años,firstName,lastName]=person

console.log(`Person - Age: ${años}, Name: ${firstName} ${lastName}`);

//Reescribe el código para usar desestructuring, teniendo en cuenta que no debes crear ninguna variable vacía:

let person = ["Chris", 12, "Owen"];

let firstName = person[0];
let lastName = person[2];

console.log(`Name: ${firstName} ${lastName}`);