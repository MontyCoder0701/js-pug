const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');

window.addEventListener('load', () => {
    if (!localStorage.getItem('modalLoaded')) {
        modal.style.display = 'block';
        localStorage.setItem('modalLoaded', true);
    } else {
        modal.style.display = 'none';
    }
});


closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

