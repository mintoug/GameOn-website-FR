function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal

const btnCloseModal = document.querySelector('.close');
const btnOpenModal = document.querySelector('.btn-signup');

btnOpenModal.addEventListener('click',()=>{
  modalbg.style.display="block";
});

btnCloseModal.addEventListener('click',()=>{
  modalbg.style.display="none";
});


 //launch and close confirm-modal
const closeConfirm=document.querySelector('.close-confirm');
const openConfirm=document.querySelector('.open-confirm');
const confirmModal=document.querySelector('.confirm-modal');

function launchConfirmModal(){

  openConfirm.addEventListener('click',()=>{
   
    confirmModal.style.display="block";
  });
  
  closeConfirm.addEventListener('click',()=>{
    confirmModal.style.display="none";
  });
  }
