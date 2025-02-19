// object destructuing - 
// We can use object destructuring to extract values directly into variables.
const user = {
    name: "Alice",
    age: 25,
    job: "Software Engineer",
    country: "USA"
};
// console.log(user.name);  
// console.log(user.age);
// console.log(user.job);   

let {name , age} = user;
console.log(name);
console.log(age);

// renaming the destructure variable - 
let {fullName = name , Age = age} = user  // renamed the name successfully 
console.log("Fullname: " , fullName);
console.log("Age: " , age);