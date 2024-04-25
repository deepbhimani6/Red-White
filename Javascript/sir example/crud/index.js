let data = [];
viewData();

function save() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let obj = {
        username: name,
        useremail: email,
        userphone: phone
    };

    if (localStorage.getItem('admin') === null || localStorage.getItem('admin') === undefined) {
        alert("this is your first element")
        data.push(obj);
        let st = JSON.stringify(data);
        localStorage.setItem('admin', st);
        viewData();
    }
    else {
        alert("element already exists")
        let value = localStorage.getItem('admin');
        let val = JSON.parse(value);
        data = val;
        data.push(obj);
        let st = JSON.stringify(data);
        localStorage.setItem('admin', st);
        viewData();
    }

    alert("User successfully register");

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";



}

function viewData() {
    let value = localStorage.getItem('admin');
    let val = JSON.parse(value);

    let table = "";
    table += `<tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>`

    for (let i in val) {
        table += `<tr>
                    <td>${val[i].username}</td>
                    <td>${val[i].useremail}</td>
                    <td>${val[i].userphone}</td>
                    <td>
                        <button onclick="deleteData('${val[i].userphone}')">Delete</button> ||
                        <button onclick="editData('${val[i].userphone}')">Edit</button>
                    </td>
                </tr>`;
    }

    document.getElementById('tbldata').innerHTML = table;
    document.getElementById('editButton').style.display = "none";
    document.getElementById('submitButton').style.display = "block";
}

function deleteData(phone) {
    let value = localStorage.getItem('admin');
    let val = JSON.parse(value);

    for (let i in val) {
        if (val[i].userphone == phone) {
            val.splice(i, 1);
        }
    }
    let st = JSON.stringify(val);
    localStorage.setItem('admin', st);
    viewData();
}

function editData(phone) {
    let allData = localStorage.getItem('admin');
    let val = JSON.parse(allData);

    for (let i in val) {
        if (val[i].userphone == phone) {
            document.getElementById('name').value = val[i].username;
            document.getElementById('email').value = val[i].useremail;
            document.getElementById('phone').value = val[i].userphone;
            document.getElementById('edit_id').value = val[i].userphone;
            document.getElementById('submitButton').style.display = "none";
            document.getElementById('editButton').style.display = "block";
        }
    }

}

function edit() {
    let edit_id = document.getElementById('edit_id').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let allData = localStorage.getItem('admin');
    let val = JSON.parse(allData);

    for (let i in val) {
        if (val[i].userphone == edit_id) {
            val[i].username = name;
            val[i].useremail = email;
            val[i].userphone = phone;
        }
    }
    data = val;
    let st = JSON.stringify(data);
    localStorage.setItem('admin', st);
    viewData();
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
}