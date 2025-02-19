// iterate through - 
// We can't use forEach method to iterate through Html collection 
const navItems = document.querySelectorAll(".nav-item")
// console.log(navItems[0]);
// for(let i=0; i<navItems.length; i++){
//     console.log(navItems[i]);  
// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff"
// }

// using forEach loop - 
 Array.from(navItems)
navItems.forEach(navItem => {
    navItem.style.backgroundColor = "#fff" // now it works 
});