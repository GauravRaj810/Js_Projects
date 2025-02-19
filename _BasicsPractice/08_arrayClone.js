let bike = ["passionPro" , "Bmw"];
// let updatedBike = bike.slice(0);
// console.log(updatedBike);  // using slice 

// using concat ... 
let anotherBike = [].concat(bike)
console.log(anotherBike);  // using concat ..

// new method is spread operator - we can add , expand , manuplate the things ... 
let customBike = [...bike , "Activa"]; // add the acitva also and the previous array ... 
console.log(customBike);