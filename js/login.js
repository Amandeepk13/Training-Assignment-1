const loginForm = document.getElementById('main-login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const usernameInput = document.getElementById('username').value;
    localStorage.setItem('loggedUser' , usernameInput);

    window.location.href = '../main.html';
});