function login() {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let studentRadio = document.getElementById('student').checked;
    let facultyRadio = document.getElementById('faculty').checked;

    let isOneOfRadioChecked = studentRadio || facultyRadio;

    if (email == "" || password == "" || !isOneOfRadioChecked) {
        alert("plese fill all details");
    }
    else {
        if (isOneOfRadioChecked == studentRadio) {
            let student = localStorage.getItem('student');
            let studentData = JSON.parse(student);

            for (let i in studentData) {
                console.log(studentData[i].studentEmail);
                if (studentData[i].studentEmail == email && studentData[i].studentPassword == password) {
                    let st = JSON.stringify(studentData[i]);
                    localStorage.setItem('checkUserLogin', st);
                    return window.location.href = 'student_index.html';
                }
            }
            alert("plese enter valid details 1");
        }
        else {
            let superFaculty = localStorage.getItem('superFaculty');
            let superFacultyData = JSON.parse(superFaculty);

            if (superFacultyData.facultyEmail == email && superFacultyData.facultyPassword == password) {
                
                let st = JSON.stringify(superFacultyData);
                localStorage.setItem('checkUserLogin', st);
                return window.location.href = 'faculty_index.html';
            }
            else {
                let faculty = localStorage.getItem('faculty');
                let facultyData = JSON.parse(faculty);

                for (let i in facultyData) {
                    if (facultyData[i].facultyEmail == email && facultyData[i].facultyPassword == password) {
                        let st = JSON.stringify(facultyData[i]);
                        localStorage.setItem('checkUserLogin', st);
                        return window.location.href = 'faculty_index.html';
                    }
                }
                alert("plese enter valid details 2");
            }
        }
    }
}