// Callback Function - 
// function noteCheck(a){
//     console.log(a);
// }
// noteCheck("abc") // it will print the string as abc
// noteCheck([43.141,4132,112]) //print the array the thing we can pass anything as function argument 

// a function call another function while comleting its work ... 
function greet(name, Callback){
    console.log("hey i am greet function");
    Callback(); // calling the callback function 
}
function sayBye(){  
    console.log("I am goodbye function ");
}
greet("Gaurav" , sayBye);
