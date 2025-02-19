// const firstbutton = document.querySelector("#one");
// firstbutton.addEventListener("click" , function(e){
//   console.log(e);   
// })

const firstbutton = document.querySelectorAll(".my-buttons button");
for(let button of firstbutton){
    button.addEventListener("click" , (e)=>{
        console.log(e.currentTarget);
    })
}