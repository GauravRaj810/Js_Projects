// object enteries ... converts and object into arrays of key -value paris .. 
const person = {
    name: "Alice",
    age: 30,
    job: "Engineer"
};

for(let [key,value] of Object.entries(person)){
    console.log(key +":"+ value);
}