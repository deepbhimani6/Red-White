let data = {};

function categoryAdd() {

    let checkUserLogin = localStorage.getItem('checkUserLogin');
    let userInfo = JSON.parse(checkUserLogin);

    let enteredCategory = document.getElementById('category').value;

    let obj = {
        category: enteredCategory,
        firstName: userInfo.userFirstName,
        lastName: userInfo.userLastName,
        grid: userInfo.grid
    }

    if (localStorage.getItem('category') === null || localStorage.getItem('category') === undefined) {
        data[userInfo.grid] = obj;
        let st = JSON.stringify(data);
        localStorage.setItem('category', st);
        alert("your category successfully added");
        document.getElementById('category').value = "";
    }
    else {
        let category = localStorage.getItem('category');
        let value1 = JSON.parse(category);
        if (Object.keys(value1).includes(userInfo.grid.toString())) {
            value1[userInfo.grid.toString()].category  +=  ',' + enteredCategory;
        } else {
            value1[userInfo.grid] = obj;
        }
        data = value1;
        let st = JSON.stringify(data);
        localStorage.setItem('category', st);
        alert("your category successfully added");
        document.getElementById('category').value = "";
    }

   
    

    
}