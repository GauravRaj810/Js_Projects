// change text 
/* const changeText = document.getElementById("logo")
console.log(changeText.textContent); */
const changeText = document.getElementById("logo")
console.log(changeText.textContent);
changeText.textContent = "i am parent dom tutorial"; // here changing 
console.log(changeText.textContent);  

const selectingText = document.querySelector(".nav-sign"); 
console.log(selectingText.textContent);
selectingText.textContent = "hey i am new sign Up ";
console.log(selectingText.textContent);