// traversing first element ->  parent ->style
const h1 = document.querySelector("h1");
const div = h1.parentNode; // Selects the parent of h1 (which is <div class="container">)
div.style.color = "yellow";
div.style.background = "black";

