/* // use of bracket and dot notaition 
const car={
    Name: "BMW", 
    color: "Red",
    Quantitiy: 1
}
console.log(car);
console.log(car.color) */;  /* Accessing the element by dot operator */
// using bracket notaition in case wherre the key name is more that one word we use double code ...

const bottle = {
    Name: "Varmora",
    color: "Gray",
    Quantity: 1, 
    "Brand Value": "high"
};
console.log(bottle["Brand Value"]); // Output: "high" used here bracket notaition for the storing the value ... 
bottle.email= ["bottle@varmora"];  // addes key value pair with email
console.log(bottle);    
console.log(bottle.email);  // output is : [ 'bottle@varmora' ]

