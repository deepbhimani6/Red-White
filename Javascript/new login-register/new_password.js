function setNewPassword() {

    let npass = document.getElementById('npass').value;
    let cpass = document.getElementById('cpass').value;

    if (npass == cpass) {

        let allData = localStorage.getItem('register');
        let value = JSON.parse(allData);

        let otpData = localStorage.getItem('otp');
        let emailData = JSON.parse(otpData);

        let email = emailData.email;

        for (let i in value) {

            if (value[i].userEmail == email) {

                value[i].userPassword = npass;
            }

            let st = JSON.stringify(value);
            localStorage.setItem('register', st);
            localStorage.removeItem('otp');
            window.location.href = 'login.html';
            alert("your password successfully changed");
        }

    }
    else {
        alert("your new password & confirm password does not match");
    }
}