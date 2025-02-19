// inner text - it is similar to the text-content but here only things are visible i.e presesnt on the page not all as comparet op the text-content.... 

const displayText = document.getElementById("logo");
console.log(displayText.innerText);

displayText.innerText = "i am new logo"
console.log(displayText.innerText);