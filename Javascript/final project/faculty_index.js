let checkUserLogin = localStorage.getItem('checkUserLogin');
let checkUserLoginData = JSON.parse(checkUserLogin);

let superFaculty = localStorage.getItem('superFaculty');
let superFacultyData = JSON.parse(superFaculty);

document.getElementById('profileName').innerHTML = checkUserLoginData.facultyFirstName + " " + checkUserLoginData.facultyLastName;
document.getElementById('profileImg').innerHTML = "<img src='images/char_img/" + checkUserLoginData.img + "' class='rounded-circle' width='31'>"

function onlySuperFaculty() {

    if (checkUserLoginData.facultyEmail == superFacultyData.facultyEmail) {
        window.location.href = 'faculty_registration.html'
    }
    else {
        alert("You can't");
    }
}

function onlySuperFaculty2() {

    if (checkUserLoginData.facultyEmail == superFacultyData.facultyEmail) {
        window.location.href = 'Student_registration.html'
    }
    else {
        alert("You can't");
    }
}

let faculty = localStorage.getItem('faculty');
let facultyData = JSON.parse(faculty);

function allFaculty() {

    document.getElementById('header').innerHTML = "All Faculty";
    document.getElementById('header2').innerHTML = "";

    let tbl = "";
    tbl += `<tr>
                <th>Name</th>
                <th>Email address</th>
                <th>Subject of faculty</th>
                <th>Actions</th>
            </tr>`

    for (let i in facultyData) {

        tbl += `<tr>
                    <td>${facultyData[i].facultyFirstName + " " + facultyData[i].facultyLastName}</td>
                    <td>${facultyData[i].facultyEmail}</td>
                    <td>${facultyData[i].facultyDesignation}</td>
                    <td>
                        <button class="btn btn-success" onclick="editFaculty(${facultyData[i].uniqueId})">Edit</button>
                        <button class="btn btn-danger" onclick="deleteFaculty(${facultyData[i].uniqueId})">Delete</button>
                    <td>
                </tr>`
    }
    document.getElementById('table').innerHTML = tbl;
}

let student = localStorage.getItem('student');
let studentData = JSON.parse(student);

function allStudent() {

    document.getElementById('header').innerHTML = "All Student";
    document.getElementById('header2').innerHTML = "";

    let tbl = "";
    tbl += `<tr>
                <th>Name</th>
                <th>Email address</th>
                <th>Course</th>
                <th>Actions</th>
            </tr>`

    for (let i in studentData) {

        tbl += `<tr>
                    <td>${studentData[i].studentFirstName + " " + studentData[i].studentLastName}</td>
                    <td>${studentData[i].studentEmail}</td>
                    <td>${studentData[i].studentCourse}</td>
                    <td>
                        <button class="btn btn-success" onclick="editStudent(${studentData[i].uniqueId})">Edit</button>
                        <button class="btn btn-danger" onclick="deleteStudent(${studentData[i].uniqueId})">Delete</button>
                    <td>
                </tr>`
    }
    document.getElementById('table').innerHTML = tbl;
}

function editFaculty(uniqueId) {

    if (checkUserLoginData.facultyEmail == superFacultyData.facultyEmail) {

        for (let i in facultyData) {
            if (facultyData[i].uniqueId == uniqueId) {
                let st = JSON.stringify(facultyData[i].uniqueId);
                localStorage.setItem('uniqueId', st);
                return window.location.href = 'faculty_profile_change.html';
            }
        }
    }
    else {
        alert("You can't");
    }
}

function deleteFaculty(uniqueId) {

    if (checkUserLoginData.facultyEmail == superFacultyData.facultyEmail) {

        for (let i in facultyData) {
            if (facultyData[i].uniqueId == uniqueId) {
                facultyData.splice(i, 1);
            }
        }
        let st = JSON.stringify(facultyData);
        localStorage.setItem('faculty', st);
        allFaculty();
    }
    else {
        alert("You can't");
    }
}

function editStudent(uniqueId) {

    if (checkUserLoginData.facultyEmail == superFacultyData.facultyEmail) {

        for (let i in studentData) {
            if (studentData[i].uniqueId == uniqueId) {
                let st = JSON.stringify(studentData[i].uniqueId);
                localStorage.setItem('uniqueId', st);
                return window.location.href = 'student_profile_change.html';
            }
        }
    }
    else {
        alert("You can't");
    }
}

function deleteStudent(uniqueId) {

    if (checkUserLoginData.facultyEmail == superFacultyData.facultyEmail) {

        for (let i in studentData) {
            if (studentData[i].uniqueId == uniqueId) {
                studentData.splice(i, 1);
            }
        }
        let st = JSON.stringify(studentData);
        localStorage.setItem('student', st);
        allStudent();
    }
    else {
        alert("You can't");
    }
}

if (checkUserLoginData.facultyEmail == superFacultyData.facultyEmail) {
    document.getElementById('header2').innerHTML = "Hello world..!";
}
else {
    // document.getElementById('table').innerHTML = ''
    let tbl = `<tr>
                    <th>Name</th>
                    <th>Email address</th>
                    <th>Course</th>
                </tr>`

    for (let i in studentData) {
        for (let j in studentData[i].studentCourse) {
            if (checkUserLoginData.facultyDesignation == studentData[i].studentCourse[j]) {
                console.log(studentData[i].studentFirstName);

                tbl += `<tr>
                            <td>${studentData[i].studentFirstName + " " + studentData[i].studentLastName}</td>
                            <td>${studentData[i].studentEmail}</td>
                            <td>${studentData[i].studentCourse[j]}</td>
                        </tr>`
            }
        }
    }
    document.getElementById('table').innerHTML = tbl;
}