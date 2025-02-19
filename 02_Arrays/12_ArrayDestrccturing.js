// Array Destructuring - 
const myArray = ["value1" , "value2" , "value3"];
/* let [myvar1 , myvar2] = myArray;    *//* Array destructuring  */
// console.log("Value of myvar1", myvar1);
// console.log("Value of myvar2", myvar2);

// We can also destructer the array means and copy the element rest of the another one - 
let [myvar1 , myvar2, ...mynewArray] = myArray;
console.log(mynewArray); // prints value3
console.log(myvar1);
