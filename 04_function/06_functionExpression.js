// Function Expression - 
// just we simply assign the function to one 1 variable 

// simple function firstly 
/* function addTwo(num1 , num2){
    return num1 + num2;
}
console.log(addTwo(2,4)); */

/* Converting above to the expression  */
/* const sumofNumebers = function (num1 , num2){
    return num1 + num2;
}
console.log(sumofNumebers(2,4)); */


// same thing using function expression - 

const findTarget = function(arr , target){
    for(let i=0; arr.length; i++){
        if(arr[i]==target){
            return [i];
        }
    }
    return -1;
}
const ans = findTarget([10,20,30,40] , 40);
console.log(ans);
