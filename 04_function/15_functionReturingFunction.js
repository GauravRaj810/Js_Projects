// Function Returining Function - 
function myfunc(){
    function hello(){
    //  console.log("i am hello function ");
    return "hello world" // return using then we have to store that thing to the variable 
    }
    return hello;
}
const ans = myfunc(); // first myfunc is called okay ! 
console.log(ans()); 
