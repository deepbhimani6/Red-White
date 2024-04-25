let checkUserLogin = localStorage.getItem('checkUserLogin');
let value = JSON.parse(checkUserLogin);

document.getElementById('showImage').innerHTML = "<img src='images/char_img/" + value.image + "' class='border-radius avatar img-thumbnail'>"
document.getElementById('firstName').value = value.userFirstName;
document.getElementById('lastName').value = value.userLastName;
document.getElementById('email').value = value.userEmail;
document.getElementById('grid').value = value.grid;
document.getElementById('gridHidden').value = value.grid;

function changeProfile(){

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let gridHidden = document.getElementById('gridHidden').value;
    let imgName = document.getElementById('imgName').value;
    let setImgName = imgName.replace(/.*(\/|\\)/, '');

    console.log(setImgName);

    let allData = localStorage.getItem('register');
    let value = JSON.parse(allData);

    for(let i in value){

        if(value[i].grid == gridHidden){

            value[i].userFirstName = firstName;
            value[i].userLastName = lastName;
            value[i].userEmail = email;
            value[i].image = setImgName;
        }

        let st = JSON.stringify(value);
        localStorage.setItem('register',st);
        alert("your Profile is successfully changed");
        window.location.href = 'index.html';
    }

}