'use strict';

const mainCard=document.querySelector('.main');
const successCard=document.querySelector('.success-card');
const form=document.getElementById('form');
const userEmail=document.getElementById('email');
const submitFormBtn=document.getElementById('send-email');
const dismissBtn=document.getElementById('dismiss-btn');
const userEmailSpan=document.querySelector('.user-entered-email');
const errorMessageSpan=document.querySelector('.error-message');
let validRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

const reset=()=>{
    userEmail.value='';
}
const showSuccess=()=>{
    reset();
    successCard.style.display='grid';
    mainCard.style.display='none';
}
const closeSuccessCard=()=>{
    successCard.style.display='none';
    mainCard.style.display='grid';
}
const setErrorMessage=(message)=>{
    userEmail.classList.add('error');
    errorMessageSpan.innerText=message;

    setTimeout(()=>{
        userEmail.classList.remove('error');
        errorMessageSpan.innerText='';
        reset();
    },2500);
}
const validateEmail=()=>{
    let enteredEmail=userEmail.value;

    if(enteredEmail===''){
        setErrorMessage('Field is empty!')
    }else if(enteredEmail.length<9){
        setErrorMessage('Must contain at least 8 characters');
    }else if(!enteredEmail.match(validRegex)){
        setErrorMessage('Valid email required');
		
    }else{
        return true;
    }
    reset();
}

dismissBtn.addEventListener('click',closeSuccessCard);
submitFormBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(validateEmail()){
        showSuccess();
    }
})
