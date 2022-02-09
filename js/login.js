document.getElementById('login-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('email-field');
    const loginEmail = userEmail.value;

    const userPassword = document.getElementById('password-field');
    const loginPassword = userPassword.value;

    if(loginEmail == 'mybank@mail.com' && loginPassword == 'secret'){
        window.location.href = 'bankpage.html';
    }
})