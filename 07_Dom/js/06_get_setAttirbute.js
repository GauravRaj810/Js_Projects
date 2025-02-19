// get and set attributes --- 
// const allAttributes = document.querySelector("nav ul li a")
// console.log(allAttributes.getAttribute("href"));

const allAttributes = document.querySelector("nav ul li a"); // Assuming there's an <a> tag inside the <li>
console.log(allAttributes.getAttribute("href"));
allAttributes.setAttribute("href" , "https://youtube.com")
console.log(allAttributes.getAttribute("href")); //changed here the url

