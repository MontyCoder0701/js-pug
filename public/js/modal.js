const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('load', () => {
    modal.style.display = 'block';
});
