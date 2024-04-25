
view();
function view()
{
    let register = localStorage.getItem('register');
    let uservalue = JSON.parse(register);

    let tbl = "";
    tbl += `<tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
            </tr>`;
    for(let i in uservalue)
    {
        tbl += `<tr>
                    <td>${uservalue[i].username}</td>
                    <td>${uservalue[i].useremail}</td>
                    <td>`;

                    if(uservalue[i].role == "admin") {
                        tbl += `<button name="role" onclick="changeRole('${uservalue[i].useremail}')" class="btn btn-primary">${uservalue[i].role}</button></td>`    
                    }
                    else{
                        tbl += `<button name="role" onclick="changeRoleAdmin('${uservalue[i].useremail}')" class="btn btn-success">${uservalue[i].role}</button></td>` 
                    }
                    tbl += `<td><button class="btn btn-danger" onclick="deleteData('${uservalue[i].grid}')">Delete</button></td>`;
        tbl +=   `</tr>`;
    }
    document.getElementById('userdata').innerHTML = tbl;
}


function changeRole(email)
{
    let register = localStorage.getItem('register');
    let uservalue = JSON.parse(register);

    for(let i in uservalue)
    {
        if(uservalue[i].useremail == email)
        {
            uservalue[i].role = "user";
        }
    }
    alert("Role successfully changed");
    let st1 = JSON.stringify(uservalue);
    localStorage.setItem('register',st1);
    view();
}

function changeRoleAdmin(email)
{
    let register = localStorage.getItem('register');
    let uservalue = JSON.parse(register);

    for(let i in uservalue)
    {
        if(uservalue[i].useremail == email)
        {
            uservalue[i].role = "admin";
        }
    }
    alert("Role successfully changed");
    let st1 = JSON.stringify(uservalue);
    localStorage.setItem('register',st1);
    view();
}

function deleteData(grid)
{
    let register = localStorage.getItem('register');
    let uservalue = JSON.parse(register);

    for(let i in uservalue)
    {
        if(uservalue[i].grid == grid)
        {
            uservalue.splice(i,1);
        }
    }
    alert("Record successfully delete");
    let st1 = JSON.stringify(uservalue);
    localStorage.setItem('register',st1);
    view();
}