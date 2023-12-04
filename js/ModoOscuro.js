// var themeToggle = document.querySelector('.theme-toggle');

// themeToggle.addEventListener('click', function() {
//     document.body.classList.toggle('modo-oscuro');
// });

// var themeToggle = document.querySelector('.theme-toggle');
// var themeToggleText = document.querySelector('.theme-toggle-sr');

// themeToggle.addEventListener('click', function() {
//     if (themeToggleText.textContent === 'Modo Oscuro') {
//         themeToggleText.textContent = 'Modo Claro';
//     } else {
//         themeToggleText.textContent = 'Modo Oscuro';
//     }
// });

var themeToggle = document.querySelector('.theme-toggle');
var themeToggleText = document.querySelector('.theme-toggle-sr');
var body = document.body;

// Verificar el estado actual del modo oscuro en LocalStorage
var isDarkMode = localStorage.getItem('darkMode') === 'true';

// Función para aplicar el modo oscuro o claro
function applyTheme() {
    if (isDarkMode) {
        body.classList.add('modo-oscuro');
        themeToggleText.textContent = 'Modo Claro';
    } else {
        body.classList.remove('modo-oscuro');
        themeToggleText.textContent = 'Modo Oscuro';
    }
}

// Aplicar el tema al cargar la página
applyTheme();

// Cambiar el estado del modo oscuro al hacer clic en el botón
themeToggle.addEventListener('click', function() {
    isDarkMode = !isDarkMode; // Cambiar el estado
    localStorage.setItem('darkMode', isDarkMode); // Guardar el estado en LocalStorage
    applyTheme(); // Aplicar el tema
});
