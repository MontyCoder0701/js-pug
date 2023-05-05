const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');

window.addEventListener('load', () => {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

