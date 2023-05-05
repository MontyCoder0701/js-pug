const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');
const calButton = document.querySelector('.cal-btn');

window.addEventListener('load', () => {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

