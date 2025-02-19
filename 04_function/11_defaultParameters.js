// earlier default parameter - 
function diffTwo( a , b){
    if(typeof b==="undefined"){
        b=5;  // previos method to check 
    }
    return a+b;
}
console.log(diffTwo(2));
// Default parameters - 
function addTwo(a , b=9){
    return a+b;
}
console.log(addTwo(2));   // here b is taken as 9 and the output will be = 11