// iterate through - 
// We can't use forEach looop  to iterate through Html collection 
const navItems = document.querySelectorAll(".nav-item")
// // console.log(navItems[0]);
// for(let i=0; i<navItems.length; i++){
//     console.log(navItems[i]);  
// }
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff"
// }
// using forEach loop - 
 Array.from(navItems)   // converts the node or html collection into array 
navItems.forEach(navItem =>  {   // now using the forEach Loop 
    navItem.style.backgroundColor = "#fff" // now it works 
});