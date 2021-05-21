function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  const icon =x.querySelector('.icon');
  icon.classList.toggle('icon-active');
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

const closeModalIcon=document.querySelector(".close")
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal

closeModalIcon.addEventListener('click', closeModal)
  function closeModal(){
    modalbg.style.display="none";
};

//the value of inputs
let first=document.getElementById('first');
let last=document.getElementById('last');
let email=document.getElementById('email');
let birthDate=document.getElementById('birthdate');
let quantify=document.getElementById('quantify');
let Condition=document.getElementById('checkbox1');
let local=document.querySelectorAll("checkbox-input");
let formData=document.querySelector('.formData');

 //check input by regex
 const nameValid=/^[A-Za-z]{1,}$/;
 const emailValid=/^[A-Za-z0-9-_.]{1,}\.[a-z]{2,}$/;
 const number=/^[0-9]{1,}$/;

 //for confirm-modal
 const closeConfirm=document.querySelector(".confirm-close");
 const confirmModal=document.querySelector(".confirm-modal");
 const btnClose=document.querySelector(".close-confirm");
 //open the modal confirmation
 closeConfirm.addEventListener("click", closeModal);
 btnClose.addEventListener("click",closeModal);

 function closeModal(){
   confirmModal.style.display="none";
 }
//check input values
function checkFirst(){
  const isValid=first.Value.length<2 || !nameValid.test(first.value);
  first.parentNode.setAttribute("data-error-visible", String(isValid));
  return !isValid
}

function checkLast(){
  const isValid=last.Value.length<2 || !nameValid.test(last.value);
  last.parentNode.setAttribute("data-error-visible", String(isValid));
  return !isValid
}
 
function checkEmail(){
  const isValid=email.Value.length<2 || !emailValid.test(email.value);
  email.parentNode.setAttribute("data-error-visible", String(isValid));
  return !isValid
}
function checkBirthDate(){
  const isValid= !birthDate.value
  birthDate.parentNode.setAttribute("data-error-visible", String(isValid));
  return !isValid
}
function checkNumber(){
  const isValid= !number.test(quantify.value)
  quantify.parentNode.setAttribute("data-error-visible", String(isValid));
  return !isValid
}

// check if one of inputsradio is checked
function checkLocal(){
  let check=0;
  local.forEach(el => check += el.checked ? 1:0);
  const isValid =check ==0
  local[0].parentNode.setAttribute('data-error-visible', String(isValid))
  return !isValid
}

//check conditions
function ckeckConditions(){
  const isValid=!condition.checked;
  condition.parentNode.setAttribute('data-error-visible', String(isValid))
  return !isValid
}

var checkInputFields=[checkFirst(), checkLast(), checkEmail(), checkBirthDate(), checkNumber(), checkLocal(), checkLocal(), ckeckConditions()]

function validate(){
  let isValid=true;
  e.preventDefault();

for (i=0; i<checkInputFields.length;i++)
{
  if(!checkInputFields[i]){
    isValid=false;
 
  
}}}
 