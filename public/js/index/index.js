const calButton = document.querySelector('.cal-btn');
const camButton = document.querySelector('.cam-btn');
const loginButton = document.querySelector('.login-btn');
const registerButton = document.querySelector('.register-btn');

calButton.addEventListener('click', () => {
    window.location.href = '/calendar';
});

camButton.addEventListener('click', () => {
    window.location.href = '/camera';
});

loginButton.addEventListener('click', () => {
    window.location.href = '/login';
});

registerButton.addEventListener('click', () => {
    window.location.href = '/register';
});
