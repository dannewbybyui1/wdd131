const themeSelector = document.querySelector('#theme');
const body = document.querySelector('body');
const logo = document.querySelector('#logo');

function changeTheme() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'images/byui-logo-white.webp'; // Make sure this image exists
    } else {
        body.classList.remove('dark');
        logo.src = 'images/byui-logo_blue (1).webp';
    }
}

themeSelector.addEventListener('change', changeTheme);
// Set default logo on load
changeTheme();


