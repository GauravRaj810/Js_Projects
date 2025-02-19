// use const for creating arrays ...
/* - prevents resassignment 
- allow modification  */

const cart = ["Laptop", "Phone"];
cart.push("Headphones");  // ✅ Allowed (modifying elements)
cart.pop(); 
console.log(cart);              // ✅ Allowed (removing elements)

// ❌ Not Allowed (Reassigning the whole array)
// cart = ["Tablet", "Smartwatch"]; 
// TypeError: Assignment to constant variable.
