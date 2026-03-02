
// Tu código anterior del año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const icon = menuToggle.querySelector('i');
    const links = document.querySelectorAll('.links a');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Cambiamos el icono
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
            // Evita que la página haga scroll mientras el menú está abierto
            document.body.style.overflow = 'hidden';
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
            document.body.style.overflow = 'auto';
        }
    });

    // Cerrar al hacer clic en un enlace
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            icon.classList.replace('fa-times', 'fa-bars');
            document.body.style.overflow = 'auto';
        });
    });
});