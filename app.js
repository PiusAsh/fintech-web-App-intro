function accountDetails() {
    let userIdInput = document.forms["myForm"]["userIdText"].value;
    let userAcctInput = document.forms["myForm"]["acctInput"].value;

    if (userAcctInput.length === 10 && userIdInput !== '') {
        window.localStorage.setItem('myAccountVal', userAcctInput);
        window.localStorage.setItem('valInput', userIdInput);

        window.location.href = "dashboard.html";
    } else {
        alert("Please enter your credientials correctly.")
    }

}
