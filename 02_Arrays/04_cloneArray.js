// // Clone Array = 

// // 1. with the help of slice method ...
// let array1 = ["gaurav", "Gautam"];
// let array2 = array1.slice(0);
// // console.log(array2);
// console.log(array1===array2);  // give false bcz array2 is now different from array1...

// // 2. with the help of concat method ...
// let arr1 = [2 ,3 , 4];
// let arr2 = [].concat(arr1)
// console.log(arr1===arr2);  
// console.log(arr2); // also give false bcz both arr1 and arr2 are different now 


// 3. New technique is spread operator - used to clone array 
let fruits =["banana", "apple" , "Litchi" , "Guava"];
let vegetableAndFruits = ["potato", "tomato", ...fruits]
console.log(vegetableAndFruits);