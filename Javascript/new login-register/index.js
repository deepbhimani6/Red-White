viewData();

function viewData() {

    let allData = localStorage.getItem('register');
    let value = JSON.parse(allData);

    let tbl = "";
    tbl += `<tr>
                <th>Name</th>
                <th>Email address</th>
                <th>Role</th>
                <th>Actions</th>
            </tr>`

    for (let i in value) {

        tbl += `<tr>
                    <td>${value[i].userFirstName + " " + value[i].userLastName}</td>
                    <td>${value[i].userEmail}</td>
                    <td>`
        if (value[i].role == "admin") {
            tbl += `<button name="role" class="btn btn-primary" onclick="changeToUser('${value[i].userEmail}')">${value[i].role}</button></td>`
        }
        else {
            tbl += `<button name="role" class="btn btn-success" onclick="changeToAdmin('${value[i].userEmail}')">${value[i].role}</button></td>`
        }
        tbl += `<td><button class="btn btn-danger" onclick="deleteData(${value[i].grid})">Delete</button><td>`
        tbl += `</tr>`
    }
    document.getElementById('table').innerHTML = tbl;
}

function changeToUser(email) {

    let allData = localStorage.getItem('register');
    let value = JSON.parse(allData);

    for (let i in value) {

        if (value[i].userEmail == email) {
            value[i].role = "user";
        }
    }

    let st = JSON.stringify(value);
    localStorage.setItem('register', st);
    viewData();
}

function changeToAdmin(email) {

    let allData = localStorage.getItem('register');
    let value = JSON.parse(allData);

    for (let i in value) {

        if (value[i].userEmail == email) {
            value[i].role = "admin";
        }
    }

    let st = JSON.stringify(value);
    localStorage.setItem('register', st);
    viewData();
}

function deleteData(grid) {

    let allData = localStorage.getItem('register');
    let value = JSON.parse(allData);

    for (let i in value) {

        if (value[i].grid == grid) {
            value.splice(i, 1);
        }
    }

    let st = JSON.stringify(value);
    localStorage.setItem('register', st);
    viewData();
}