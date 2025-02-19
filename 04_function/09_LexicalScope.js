// lexical Scope - a function can access varaibles from its outer scope where it was defined .
// defined at the time of writing the code ... 
// for example - 
function myApp(){
    const myVar = "Value1";
    function myFunc(){
        // const myVar = "value35";
        console.log("inside myFunc" , myVar);
    }
     console.log(myVar);
     myFunc();
}
myApp();