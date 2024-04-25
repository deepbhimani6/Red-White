function otpData(){

    let userotp = document.getElementById('otp').value;

    let otp = localStorage.getItem('otp');
    let otpData = JSON.parse(otp);

    if(otpData.otp == userotp){
        window.location.href = 'new_password.html'
    }
    else{
        alert("otp is not valid");
    }
}