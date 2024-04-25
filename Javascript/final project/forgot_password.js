function getOtp() {

    let email = document.getElementById('email').value;
    let check = 0;

    if (email == "") {
        alert("plese fill details");
    }
    else {
        let superFaculty = localStorage.getItem('superFaculty');
        let superFacultyData = JSON.parse(superFaculty);

        let userOtp = Math.floor(Math.random() * 1000000);

        let otp = {
            otp: userOtp,
            facultyEmail: email
        }

        if (superFacultyData.facultyEmail == email) {

            let st = JSON.stringify(otp);
            localStorage.setItem('otp', st);
            check = 1;
        }
        else {
            let faculty = localStorage.getItem('faculty');
            let facultyData = JSON.parse(faculty);

            for (let i in facultyData) {
                if (facultyData[i].facultyEmail == email) {

                    let st = JSON.stringify(otp);
                    localStorage.setItem('otp', st);
                    check = 1;
                }
                else {
                    let student = localStorage.getItem('student');
                    let studentData = JSON.parse(student);

                    for (let j in studentData) {

                        if (studentData[j].studentEmail == email) {

                            let otp = {
                                otp: userOtp,
                                studentEmail: email
                            }

                            let st = JSON.stringify(otp);
                            localStorage.setItem('otp', st);
                            check = 1;
                            break;
                        }
                    }
                }
            }
        }

        if (check == 1) {
            window.location.href = 'otp.html';
        }
        else {
            alert("User not found");
        }
    }

}

