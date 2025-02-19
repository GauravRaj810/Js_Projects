// Spread Operator - 
const user1 = { name: "Alice", age: 30 };
const user2 = { job: "Engineer", country: "USA" };

const totalUser = {...user1 , ...user2 ,name: "Ravi", age: 40  }
console.log(totalUser);