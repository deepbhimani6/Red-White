let data = [];

function studentRegister() {

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let phone = document.getElementById('phone').value;
    let femaleGender = document.getElementById('femaleGender').checked;
    let maleGender = document.getElementById('maleGender').checked;
    let otherGender = document.getElementById('otherGender').checked;

    let isOneOfRadioChecked = femaleGender || maleGender || otherGender;
    let doesFormHasError = undefined;
    let radioButtons = document.getElementsByName('inlineRadioOptions');
    let CBButtons = document.getElementsByName('course');

    let selectedCourse = []
            CBButtons.forEach(inputElement => {
                if (inputElement.checked) {
                    selectedCourse.push(inputElement.value)
                }
            });

    if (firstName == "" || lastName == "" || email == "" || password == "" || phone == "" || !isOneOfRadioChecked || selectedCourse.length === 0) {
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

        if (phone.match(phoneFormat)) { }
        else {
            doesFormHasError = true;
            alert("phone no. is not valid");
        }

        if (doesFormHasError == undefined) {

            let obj = {
                studentFirstName: firstName,
                studentLastName: lastName,
                studentEmail: email,
                studentPassword: password,
                studentPhone: phone,
                studentGender: isOneOfRadioChecked,
                studentCourse : selectedCourse,
                uniqueId: Math.floor(Math.random() * 1000),
                GRID : Math.floor(Math.random() * 10000),
                img : "1.png"
            }

            radioButtons.forEach(inputElement => {
                if (inputElement.checked) {
                    obj.studentGender = inputElement.value;
                }
            });

            if (localStorage.getItem('student') === null || localStorage.getItem('student') === undefined) {
                data.push(obj);
                let st = JSON.stringify(data);
                localStorage.setItem('student', st);
                window.location.href = 'faculty_index.html';
            }
            else {
                let student = localStorage.getItem('student');
                let studentData = JSON.parse(student);

                data = studentData;
                data.push(obj);
                let st = JSON.stringify(data);
                localStorage.setItem('student', st);
                window.location.href = 'faculty_index.html';
            }

            document.getElementById('firstName').value = "";
            document.getElementById('lastName').value = "";
            document.getElementById('email').value = "";
            document.getElementById('password').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('femaleGender').checked = "";
            document.getElementById('maleGender').checked = "";
            document.getElementById('otherGender').checked = "";
            document.getElementById('c').checked = "";
            document.getElementById('cPlusPlus').checked = "";
            document.getElementById('html').checked = "";
            document.getElementById('css').checked = "";
            document.getElementById('Javascript').checked = "";
            document.getElementById('React_js').checked = "";
        }
    }
}

function resetAll() {

    document.getElementById('firstName').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('femaleGender').checked = "";
    document.getElementById('maleGender').checked = "";
    document.getElementById('otherGender').checked = "";
    document.getElementById('c').checked = "";
    document.getElementById('cPlusPlus').checked = "";
    document.getElementById('html').checked = "";
    document.getElementById('css').checked = "";
    document.getElementById('Javascript').checked = "";
    document.getElementById('React_js').checked = "";

}

// const studentForm = document.getElementById('studentRegister')

// studentForm.addEventListener('submit', (e) => {

//     e.preventDefault();

//     let gender;
//     let firstName = document.getElementById('firstName').value;
//     let lastName = document.getElementById('lastName').value;
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     let phone = document.getElementById('phone').value;
//     studentForm['inlineRadioOptions'].forEach(inputRadio => {
//         if (inputRadio.checked) {
//             gender = inputRadio.value
//         }
//     });
//     const CBButtons = document.getElementsByName('course');
//     let selectedCourse = []
//             CBButtons.forEach(inputElement => {
//                 if (inputElement.checked) {
//                     selectedCourse.push(inputElement.value)
//                 }
//             });
            
//     console.log({
//         gender,
//         firstName,
//         email,
//         password,
//         phone,
//         selectedCourse
//     });
// })