// adding multiple event on mulitple button - 
const allButton = document.querySelectorAll(".my-buttons button");

for(let button of allButton){
    button.addEventListener("click" , ()=>{
        console.log("yes button is clicked");
    })
}