// converting object into array  -- 
// If you have an object and want to convert it into an array of key-value pairs, you can use Object.entries().
// const user = {
//     name: "Alice",
//     age: 25,
//     job: "Engineer"
// };
const userArray = [
    ["name", "Alice"],
    ["age", 25],
    ["job", "Engineer"]
];


// let newArray = Object.entries(user)
// console.log(newArray); // convert the object to array 

let againArray = Object.fromEntries(userArray)
console.log(againArray);
