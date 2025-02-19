// Lexical Scope - 
function myApp(){
    const age = 21;
    console.log("hello i am myApp function and my age is :" , age);
    function myAppchild(){
        // const age = 19;  // if i remove this then it takes the outer scope variabel 
        console.log("Hello i am myAppchild" , age);
    }
    myAppchild();
}
myApp();