// object inside Array - 
/* An object inside an array means that an array contains one or more objects as its elements. This is common in JavaScript and many other programming languages when working with structured data. */
const users= [
    {user_Id:1, userName: "Rakesh", gender:"Male"},
    {user_Id:2, userName: "Mohit", gender:"Male"},
    {user_Id:3, userName: "Nitish", gender:"Male"}
]
// console.log(users);
console.log(users[2].user_Id);
// for(let user of users){
//     console.log(user.userName);
// }