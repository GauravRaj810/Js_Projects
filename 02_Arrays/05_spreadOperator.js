// Spread Operator - 
// sperad operator is used to expand elements of an array by performing action like copy , merge , manipulate arrays - 
/* Successfully copied the array  */

let arr = [1 , 2, 3];
let arr2 = [...arr];
console.log(arr2);

/* Successfully mergin the array  */

let arr3 = [ "x" , 1 , 3];
let arr4 = [4,5,6];
let mergearray = [...arr3 , ...arr4];
console.log(mergearray);  // Successfully mergeing the array 


/* manipulating example of using the spread operator  */
let fruits = ["banana" , "Mango", "Litchi"];
let newfruits = ["Guava", ...fruits , "orange"];
console.log(newfruits);


let consonanat = {
    vowels: "aeiou"
}

const newArray = [..."12345678"];
console.log(newArray);
