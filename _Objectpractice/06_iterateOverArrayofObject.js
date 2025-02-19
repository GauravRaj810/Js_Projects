const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];

// for(let user of users){
//     console.log(`Name : ${user.name} , Age: ${user.age}`);
// }

// usign forEach loop - 
users.forEach(user => {
    console.log(`Name : ${user.name} , Age: ${user.age}`);
    
});
