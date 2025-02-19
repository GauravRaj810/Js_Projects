// blockScope vs functionScope .... 
// let and const are block scope and var is function scope 
{
    // block scope
    let firstName = "Gaurav";
    console.log(firstName); // here defined ...
}

// console.log(firstName); //not  here defined ...

{
    const Name = "Sarfaraaz";
    // console.log(Name);
}
// console.log(Name); //  not be accessble bcz of const is block scope 

/* let see in the case of var  */
{

    var action = "jump"; 
}
console.log(action);  // by using var we can used ... 
/* var is function scope and we can assume this file as function as treated as main function so it has global scope where we define there we can use where we want to use  */
