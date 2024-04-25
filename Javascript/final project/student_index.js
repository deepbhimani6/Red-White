let checkUserLogin = localStorage.getItem('checkUserLogin');
let checkUserLoginData = JSON.parse(checkUserLogin);

document.getElementById('profileImg').innerHTML = "<img src='images/char_img/" + checkUserLoginData.img + "' class='rounded-circle' width='31'>"