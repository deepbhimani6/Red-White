let faculty = localStorage.getItem('faculty');
let facultyData = JSON.parse(faculty);

let uniqueId = localStorage.getItem('uniqueId');
let uniqueIdData = JSON.parse(uniqueId);

for (let i in facultyData) {
    if (facultyData[i].uniqueId == uniqueIdData) {

        document.getElementById('firstName').value = facultyData[i].facultyFirstName;
        document.getElementById('lastName').value = facultyData[i].facultyLastName;
        document.getElementById('email').value = facultyData[i].facultyEmail;
        document.getElementById('phone').value = facultyData[i].facultyPhone;
        document.getElementById('uniqueIdHidden').value = facultyData[i].uniqueId;
    }
}

function changeProfile() {

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let uniqueIdHidden = document.getElementById('uniqueIdHidden').value;

    for (let i in facultyData) {
        if (facultyData[i].uniqueId == uniqueIdHidden) {
            facultyData[i].facultyFirstName = firstName;
            facultyData[i].facultyLastName = lastName;
            facultyData[i].facultyEmail = email;
            facultyData[i].facultyPhone = phone;
        }
    }

    let st = JSON.stringify(facultyData);
    localStorage.setItem('faculty', st);
    localStorage.removeItem('uniqueId')
    window.location.href = 'faculty_index.html';
}

function backHome() {
    localStorage.removeItem('uniqueId');
    window.location.href = 'faculty_index.html'
}