const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input,message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const errMessage = formControl.querySelector('p');
    errMessage.innerText = message;
}

// Show success border 
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.add('success');
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    result = re.test(String(input.value).toLowerCase());
    if(!result) {
        showError(input,' email is not valid');
    } else {
        showSuccess(input);
    }
}

// check required fields
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if(input.value === '') {
            showError(input,`${input.getAttribute('id')} field is required.`)
        } else {
            showSuccess(input);
        }
    });
}

// check passwords match
function checkPasswordsMatch(input1,input2) {
    if(input1.value !== input2.value) {
        showError(input2,'passwords dont match');
    } else {
        showSuccess(input2);
    }
}

// check input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input,`${input.getAttribute('id')} needs to be of minimum ${min} length`);
    } else if(input.value.length > max) {
        showError(input,`${input.getAttribute('id')} needs to be of maximum ${max} length`);
    }
}

// Event Listeners
form.addEventListener('submit',function(event) {
    event.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordsMatch(password,password2);
})


