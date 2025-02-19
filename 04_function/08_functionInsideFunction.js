// Function inside function - 
const myApp = ()=>{
    // Nested function - 
    const sum = (num1 , num2)=> num1 + num2;
    console.log("This is the main function ");

    //Nested funcition calling- 
    console.log(sum(2,5)); 
}
myApp(); // Main function calling ...  