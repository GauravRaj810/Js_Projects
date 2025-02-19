/* const arr = ["apple" , "banana" , "guava"]
let [fruit1 , fruit2] = arr;
console.log(fruit1);   // destructre in array just extractint the values and assining to the variable  */

// in objects let try - 
const equipmentsDetails = {
    color: ["red" ,"orange","Purple"],
    Name: ["Laptop" , "Printer", "Mouse"],
    price: [1000,4442]
}

let {color , Name} = equipmentsDetails;
console.log(color);
console.log(Name);