let student = localStorage.getItem('student');
let studentData = JSON.parse(student);

let uniqueId = localStorage.getItem('uniqueId');
let uniqueIdData = JSON.parse(uniqueId);

for (let i in studentData) {
    if (studentData[i].uniqueId == uniqueIdData) {

        document.getElementById('firstName').value = studentData[i].studentFirstName;
        document.getElementById('lastName').value = studentData[i].studentLastName;
        document.getElementById('email').value = studentData[i].studentEmail;
        document.getElementById('phone').value = studentData[i].studentPhone;
        document.getElementById('GRID').value = studentData[i].GRID;
        document.getElementById('uniqueIdHidden').value = studentData[i].uniqueId;
    }
}

function changeProfile() {

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let uniqueIdHidden = document.getElementById('uniqueIdHidden').value;

    for (let i in studentData) {
        if (studentData[i].uniqueId == uniqueIdHidden) {
            
            studentData[i].studentFirstName = firstName;
            studentData[i].studentLastName = lastName;
            studentData[i].studentEmail = email;
            studentData[i].studentPhone = phone;
        }
    }

    let st = JSON.stringify(studentData);
    localStorage.setItem('student', st);
    localStorage.removeItem('uniqueId')
    window.location.href = 'faculty_index.html';
}

function backHome() {
    localStorage.removeItem('uniqueId');
    window.location.href = 'faculty_index.html'
}