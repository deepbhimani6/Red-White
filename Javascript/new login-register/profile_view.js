let checkUserLogin = localStorage.getItem('checkUserLogin');
let value = JSON.parse(checkUserLogin);

document.getElementById('profileImg').innerHTML = "<img src='images/char_img/" + value.image + "' width='400'>";
document.getElementById('username').innerHTML = value.userFirstName + " " + value.userLastName;
document.getElementById('userRoleTop').innerHTML = value.role;
document.getElementById('userRole').innerHTML = value.role;
document.getElementById('userEmail').innerHTML = value.userEmail;
document.getElementById('userGrid').innerHTML = value.grid;