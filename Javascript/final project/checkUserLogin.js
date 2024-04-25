let singleData = localStorage.getItem('checkUserLogin');

if (!singleData) {
    window.location.href = 'login.html';
}