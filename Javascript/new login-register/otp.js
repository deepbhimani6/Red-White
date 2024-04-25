function otpData() {

    let userOtp = document.getElementById('otp').value;

    let otpData = localStorage.getItem('otp');
    let value = JSON.parse(otpData);

    if (value.otp == userOtp) {
        window.location.href = 'new_password.html'
    }
    else {
        alert("otp is wrong");
    }
}