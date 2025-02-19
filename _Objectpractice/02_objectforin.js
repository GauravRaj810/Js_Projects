/* You have the following object:
const person = {
    name: "Alice",
    age: 30,
    job: "Engineer"
};
Write a for...in loop to print each key and value from this object. 🚀 */
const person = {
    name: "Alice",
    age: 30,
    job: "Engineer"
};

for(let details in person){
    console.log(details +  ": " + person[details]);
}