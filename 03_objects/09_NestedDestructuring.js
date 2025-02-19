// Nested Destrucuting - 
const users =[
    {id: 1 , userName: "alice"},
    {id: 2 , userName: "bob"}
]
const [{id,userName:uName}] = users;  // Nested destructing ...
console.log(uName);
console.log(id);