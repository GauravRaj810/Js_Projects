// innerHtml is a property allows you to get or set htmnl content inside an element !

const elementExtracter = document.querySelector(".headline");
// console.log(elementExtracter.innerHTML);
elementExtracter.innerHTML = "<h1>changecd dom tutorial</h1>"
elementExtracter.innerHTML = "<button> click Me</button>"
console.log(elementExtracter.innerHTML);
