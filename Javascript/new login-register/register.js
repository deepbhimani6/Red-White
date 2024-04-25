let checkUserLogin = localStorage.getItem('checkUserLogin');

        if (checkUserLogin) {
            window.location.href = 'index.html';
        }

let data = [];

function register() {

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let role = document.getElementById('role').value;

    let obj = {
        userFirstName: firstName,
        userLastName: lastName,
        userEmail: email,
        userPassword: password,
        role: role,
        grid: Math.floor(Math.random() * 10000),
        image : "1.png"
    }

    if (localStorage.getItem('register') === null || localStorage.getItem('register') === undefined) {
        data.push(obj);
        let st = JSON.stringify(data);
        localStorage.setItem('register', st);
        alert("Your data successfully Register");
        window.location.href = 'login.html';
    }
    else {
        let allData = localStorage.getItem('register');
        let value = JSON.parse(allData);
        data = value;
        data.push(obj);
        let st = JSON.stringify(data);
        localStorage.setItem('register', st);
        alert("Your data successfully Register");
        window.location.href = 'login.html';
    }

    document.getElementById('firstName').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('email').value = "";
    document.getElementById('role').value = "";
}