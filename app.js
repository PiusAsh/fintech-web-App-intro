function accountDetails() {
    let userIdInput = document.forms["myForm"]["userIdText"].value;
    let userAcctInput = document.forms["myForm"]["acctInput"].value;
    const aError = document.querySelector('.accountError');
    const uError = document.querySelector('.userError');
    const uSuccess = document.querySelector('.userSuccess');
    const aSuccess = document.querySelector('.accountSuccess');


    if (userAcctInput.length !== 10) {
        aError.textContent = "Account number must be up to 10 digits.";

    } else {
        aSuccess.textContent = "Valid Account";
        aError.textContent = '';
        window.localStorage.setItem('myAccountVal', userAcctInput);
    }

    if (userIdInput !== '') {

        uSuccess.textContent = "Valid Username.";
        uError.textContent = '';
        window.localStorage.setItem('valInput', userIdInput);
    } else {
        uError.textContent = "Username is required";
    }
    if (userAcctInput.length === 10 && userIdInput !== '') {
        window.location.href = "dashboard.html";
    }


};
