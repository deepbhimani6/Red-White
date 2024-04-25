function login()
{
            let useremail = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            let check = 0;
            let allData = localStorage.getItem('register');
            let value = JSON.parse(allData);
            for(let i in value)
            {
                if(value[i].useremail == useremail && value[i].userpassword == password)
                {
                    window.location.href = 'index.html';
                    let st = JSON.stringify(value[i]);
                    localStorage.setItem('chekUserLogin',st);
                    check = 1;
                }
            }

            if(check == 1){
                window.location.href='index.html';
            }else{
              alert("Email and Password and Role something wrong");
            }
}