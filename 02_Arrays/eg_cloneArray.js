// let sliceDemo = [10,20,40];
// /* // let sliceDemo1 = sliceDemo.slice(0);
// console.log(sliceDemo);
// console.log(sliceDemo===sliceDemo1); */
// // using concat method - 
// let sliceDemo1 = [].concat(sliceDemo);
// console.log(sliceDemo1);
// console.log(sliceDemo1===sliceDemo); // fetch false 

// // new way is spread operator - 
// let spreadDemo = [4,5.6,7]
// let newArray = [...spreadDemo, 8 , 9]
// console.log(newArray);
// let anotherArray = [...spreadDemo , newArray]

let bottle = ["black" , "red", "green"]
let bottleSizeAndColor = ["M","L", "XL" , ...bottle]
console.log(bottleSizeAndColor);
