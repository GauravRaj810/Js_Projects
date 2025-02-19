const modalBtn = document.querySelector(".modal-btn")
const modal = document.querySelector(".modal-overlay")
const closeBtn = document.querySelector(".close-btn")

modalBtn.addEventListener("click" , function(){
    modal.classList.add("open-modal")   // when event triggered the modal-overaly invoked and along with the open -modal class come into action that add the visiblity and icreases the z-index of the overlay 
})

closeBtn.addEventListener("click" , function(){
    modal.classList.remove("open-modal")  
    console.log(closeBtn);  // same thing we using for the closing also just by removing the class 
})