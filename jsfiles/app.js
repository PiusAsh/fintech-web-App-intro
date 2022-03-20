function accountDetails() {
    let userAcctInput = document.forms["myForm"]["acctInput"].value;
    if (userAcctInput.length === 10) {
        window.localStorage.setItem('myAccountVal', userAcctInput);

        window.location.href = "dashboard.html";
    } else {
        alert("Incorrect Account Number, Please try again.")
    }
}

function accountDetails(){
    let userIdTextInput = document.forms["myForm"]["userIdText"].value;
    if (userIdTextInput.length > 0) {
      window.localStorage.setItem('myAccountUser', userIdTextInput);
      
      window.location.href = "dashboard.html";
    } else {
        alert("Please enter your username")
    }
}


