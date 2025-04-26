const darkModeIcon = document.querySelector('.dark-mode-icon');
darkModeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});