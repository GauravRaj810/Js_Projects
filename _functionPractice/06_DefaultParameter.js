/* // Defautl parameter - 
👉 Question: Use Default Parameters in the Function Below
Modify the function so that if no argument is passed, it defaults to "Guest".
const greetUser = (name) => {
    console.log(`Hello, ${name}!`);
};
greetUser(); // Expected Output: "Hello, Guest!"
greetUser("Alice"); // Expected Output: "Hello, Alice!"
Hint: Use the = operator inside the function parameter. */

const greetUser = (name="guest") => {
    console.log(`Hello, ${name}!`);
};
greetUser() // output is hello guest ..
greetUser("Gaurav")  // outlput is hello gaurav ... 