// 🚀 Next Question: Function Inside Function
// 👉 Write a function named outerFunction that contains another function inside it (innerFunction).
// outerFunction should call innerFunction inside it.
// innerFunction should return "Hello from inner function!"
// Call outerFunction and print the result.
// Try it out! Let me know if you need help! 🔥😊

const outerFunction = ()=>{
    const innerFunction = ()=>{
        return "Hello from inner function ! "
    }
    return innerFunction()  // Call innerFunction and return its result
}
const ans = outerFunction();
console.log(ans);