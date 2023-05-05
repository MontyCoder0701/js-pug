const calButton = document.querySelector('.cal-btn');
const camButton = document.querySelector('.cam-btn');

calButton.addEventListener('click', () => {
    window.location.href = '/calendar';
});

camButton.addEventListener('click', () => {
    window.location.href = '/camera';
});
