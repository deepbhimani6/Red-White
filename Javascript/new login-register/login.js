let checkUserLogin = localStorage.getItem('checkUserLogin');

if (checkUserLogin) {
    window.location.href = 'index.html';
}

function login() {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let check = 0;
    let allData = localStorage.getItem('register');
    let value = JSON.parse(allData);

    for (let i in value) {
        if (value[i].userEmail == email && value[i].userPassword == password) {
            window.location.href = 'index.html';
            let st = JSON.stringify(value[i]);
            localStorage.setItem('checkUserLogin', st);
            check = 1;
        }
    }

    if (check == 1) {
        window.location.href = 'index.html';
        alert("you successfully login");
    }
    else {
        alert("your email or password something wrong");
    }

}