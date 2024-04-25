function setNewPassword() {

    let n_password = document.getElementById('n_password').value;
    let c_Password = document.getElementById('c_password').value;

    if (n_password == c_Password) {

        let otp = localStorage.getItem('otp');
        let otpData = JSON.parse(otp);

        check = 0;

        let superFaculty = localStorage.getItem('superFaculty');
        let superFacultyData = JSON.parse(superFaculty);

        if (otpData.facultyEmail) {
            if (superFacultyData.facultyEmail == otpData.facultyEmail) {

                superFacultyData.facultyPassword = n_password;
                let st = JSON.stringify(superFacultyData);
                localStorage.setItem('superFaculty', st);
                check = 1;
            }
            else {
                let faculty = localStorage.getItem('faculty');
                let facultyData = JSON.parse(faculty);

                for (let i in facultyData) {
                    if (facultyData[i].facultyEmail == otpData.facultyEmail) {

                        facultyData[i].facultyPassword = n_password;
                    }
                }
                let st = JSON.stringify(facultyData);
                localStorage.setItem('faculty', st);
                check = 1;
            }

        }
        else {
            let student = localStorage.getItem('student');
            let studentData = JSON.parse(student);

            for (let i in studentData) {
                if (studentData[i].studentEmail == otpData.studentEmail) {

                    studentData[i].studentPassword = n_password;
                }
            }
            let st = JSON.stringify(studentData);
            localStorage.setItem('student', st);
            check = 1;
        }

        if (check == 1) {
            localStorage.removeItem('otp');
            window.location.href = 'login.html';
        }
    }
    else {
        alert("Your new password & confirm password don't match");
    }


}