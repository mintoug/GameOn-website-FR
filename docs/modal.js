// DOM Elements
const modalbg         = document.querySelector(".bground");
const modalBtn        = document.querySelectorAll(".modal-btn");
const closeModalIcon  = document.querySelector(".close");
const btnSubmitForm   = document.querySelector('.open-confirm');
const confirmModal    = document.querySelector('.confirm-modal');
const closeConfirm    = document.querySelector('.close-confirm');

//the value of inputs
let first             = document.getElementById('first');
let last              = document.getElementById('last');
let email             = document.getElementById('email');
let telephone         = document.getElementById('tel');
let birthDate         = document.getElementById('birthdate');
let quantity          = document.getElementById('quantity');
let condition         = document.getElementById('checkbox1');
let local             = document.querySelectorAll(".checkbox-input");
let formData          = document.querySelector('.formData');

//check input by regex
const nameValid       = /^[A-Za-z]{1,}$/;
const emailValid      = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
const number          = /^[0-9]+$/;
const numberTel       = /^((\+)33|0)[1-9](\d{2}){4}$/;

// responsive nav bar
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



// launch modal form
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}
// close modal form

closeModalIcon.addEventListener('click', closeModal);

  function closeModal() {
    modalbg.style.display="none";
};
//the modal confirmation

function launchConfirmModal() {
  btnSubmitForm.addEventListener('click',() => {
    confirmModal.style.display = "block";
  })
}
function closeConfirmModal() {
  closeConfirm.addEventListener('click',() => {
    confirmModal.style.display = "none";
    modalbg.style.display = "none";
  })
}

//check input values
function checkFirst() {
  let isValid= first.value.length<2 || !nameValid.test(first.value);
  first.parentNode.setAttribute("data-error-visible" , String(isValid));
  return !isValid;
}

function checkLast() {
  let isValid= last.value.length<2 || !nameValid.test(last.value);
  last.parentNode.setAttribute("data-error-visible" , String(isValid));
  return !isValid;
}
 
function checkEmail() {
  let isValid = email.value.length<1 || !emailValid.test(email.value);
  email.parentNode.setAttribute("data-error-visible" , String(isValid));
  return !isValid;
}
function checkPhone() {
  let isValid = telephone.value.length<1 || !numberTel.test(telephone.value);
  telephone.parentNode.setAttribute("data-error-visible" , String(isValid));
  return !isValid;
}
function checkBirthDate() {
  let isValid= !birthDate.value ;
  birthDate.parentNode.setAttribute("data-error-visible" , String(isValid));
  return !isValid;
}
function checkNumber() {
  let isValid= !number.test(quantity.value);
  quantity.parentNode.setAttribute("data-error-visible" , String(isValid));
  return !isValid;
}

// check if one of inputsradio is checked
function checkLocal() {
  let check = 0;
  local.forEach(el => check += el.checked ? 1:0);
  let isValid = check == 0;
  local[0].parentNode.setAttribute('data-error-visible', String(isValid));
  return !isValid;
}

//check conditions
function ckeckConditions() {
  let isValid = !condition.checked;
  condition.parentNode.setAttribute('data-error-visible', String(isValid));
  return !isValid;
}

// function to validate on submit
function validate() {
  
  event.preventDefault();
  let isValid = true
  if(!checkFirst()) {
    isValid = false;
  }
  if(!checkLast()) {
    isValid = false;
  }
  if(!checkEmail()) {
    isValid = false;
  }
  if(!checkPhone()) {
    isValid = false;
  }
  if(!checkBirthDate()) {
    isValid = false;
  }
  if(!checkNumber()) {
    isValid = false;
  }
  if(!checkLocal()) {
    isValid = false;
  }
  if(!ckeckConditions()) {
    isValid = false;
  }

if(isValid) {
  launchConfirmModal()
  closeConfirmModal()
  
}
}