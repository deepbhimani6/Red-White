let data = [];

function faculty_register() {

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let designation = document.getElementById('designation').value;
    let phone = document.getElementById('phone').value;
    let femaleGender = document.getElementById('femaleGender').checked;
    let maleGender = document.getElementById('maleGender').checked;
    let otherGender = document.getElementById('otherGender').checked;

    let isOneOfRadioChecked = femaleGender || maleGender || otherGender;
    let doesFormHasError = undefined;
    let radioButtons = document.getElementsByName('inlineRadioOptions');

    if (firstName == "" || lastName == "" || email == "" || password == "" || designation == "" ||
        phone == "" || !isOneOfRadioChecked) {
        alert("Plese fill all details");
    }
    else {

        let nameFormet = /^[a-z]+$/;
        let mailFormet = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let phoneFormat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

        if (firstName.match(nameFormet)) { }
        else {
            doesFormHasError = true;
            alert("Plese enter name only in samll letter");
        }

        if (lastName.match(nameFormet)) { }
        else {
            doesFormHasError = true;
            alert("Plese enter name only in samll letter");
        }

        if (email.match(mailFormet)) { }
        else {
            doesFormHasError = true;
            alert("email is not valid");
        }

        if (password.length >= 8) {
            if (password.length <= 15) { }
            else {
                doesFormHasError = true;
                alert("Plese enter password between 8 to 15 letters");
            }
        }
        else {
            doesFormHasError = true;
            alert("Plese enter password between 8 to 15 letters");
        }

        if (designation.match(nameFormet)) { }
        else {
            doesFormHasError = true;
            alert("Plese enter designation only in samll letter");
        }

        if (phone.match(phoneFormat)) { }
        else {
            doesFormHasError = true;
            alert("phone no. is not valid");
        }


        if (doesFormHasError == undefined) {

            let obj = {
                facultyFirstName: firstName,
                facultyLastName: lastName,
                facultyEmail: email,
                facultyPassword: password,
                facultyDesignation: designation,
                facultyPhone: phone,
                facultyGender: isOneOfRadioChecked,
                uniqueId: Math.floor(Math.random() * 1000),
                img : "1.png"
            }

            radioButtons.forEach(inputElement => {
                if (inputElement.checked) {
                    obj.facultyGender = inputElement.value;
                }
            });

            if (localStorage.getItem('superFaculty') === null || localStorage.getItem('superFaculty') === undefined) {
                let st = JSON.stringify(obj);
                localStorage.setItem('superFaculty', st);
                window.location.href = 'faculty_index.html';
            }
            else {
                if (localStorage.getItem('faculty') === null || localStorage.getItem('faculty') === undefined) {
                    data.push(obj);
                    let st = JSON.stringify(data);
                    localStorage.setItem('faculty', st);
                    window.location.href = 'faculty_index.html';
                }
                else {
                    let faculty = localStorage.getItem('faculty');
                    let facultyData = JSON.parse(faculty);
                    
                    data = facultyData;
                    data.push(obj);
                    let st = JSON.stringify(data);
                    localStorage.setItem('faculty', st);
                    window.location.href = 'faculty_index.html';
                }
            }

            document.getElementById('firstName').value = "";
            document.getElementById('lastName').value = "";
            document.getElementById('email').value = "";
            document.getElementById('password').value = "";
            document.getElementById('designation').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('femaleGender').checked = "";
            document.getElementById('maleGender').checked = "";
            document.getElementById('otherGender').checked = "";
        }
    }
}

function resetAll() {
    
    let firstName = document.getElementById('firstName').value = "";
    let lastName = document.getElementById('lastName').value = "";
    let email = document.getElementById('email').value = "";
    let password = document.getElementById('password').value = "";
    let designation = document.getElementById('designation').value = "";
    let phone = document.getElementById('phone').value = "";
    let femaleGender = document.getElementById('femaleGender').checked = "";
    let maleGender = document.getElementById('maleGender').checked = "";
    let otherGender = document.getElementById('otherGender').checked = "";
}