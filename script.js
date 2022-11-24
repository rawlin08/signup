let password = document.querySelector('#password');
let passwordConfirm = document.querySelector('#passwordConfirm');
let createAccount = document.querySelector('button');

createAccount.addEventListener('click', () => {
    passwordValidation();
});

function passwordValidation() {
    if (password.value == passwordConfirm.value) {
        console.log('the same');
    }
    else {
        console.log('not the same');
    }

}