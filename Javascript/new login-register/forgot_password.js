function getOtp() {

    let remail = document.getElementById('remail').value;

    let allData = localStorage.getItem('register');
    let value = JSON.parse(allData);

    check = 0;

    for (let i in value) {

        if (value[i].userEmail == remail) {

            let userOtp = Math.floor(Math.random() * 1000000);

            let otp = {
                otp: userOtp,
                email: value[i].userEmail
            }

            let st = JSON.stringify(otp);
            localStorage.setItem('otp', st);
            check = 1;
            break;
        }
    }

    if (check == 1) {
        window.location.href = 'otp.html'
    }
    else {
        alert("user not found");
    }
}