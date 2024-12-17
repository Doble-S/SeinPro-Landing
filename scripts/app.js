// Función para cargar archivos HTML en secciones específicas
function loadSection(sectionId, filePath, cssPath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido HTML de la sección
            document.getElementById(sectionId).innerHTML = data;

            // Crear y añadir el archivo CSS correspondiente
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = cssPath;
            document.head.appendChild(link);
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Cargar cada sección en su contenedor y su CSS correspondiente
loadSection('home', 'sections/home.html', 'css/home.css');
loadSection('about', 'sections/about.html', 'css/about.css');
loadSection('services', 'sections/services.html', 'css/services.css');
loadSection('contact', 'sections/contact.html', 'css/contact.css');

// Función para mostrar/ocultar el menú de WhatsApp
function toggleWhatsAppMenu() {
    const menu = document.getElementById('whatsappMenu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

// Función para ajustar la posición del botón de WhatsApp
function adjustWhatsAppButton() {
    const whatsappButton = document.querySelector('.whatsapp-container');
    const footer = document.querySelector('footer');
    const footerTop = footer.offsetTop; // Posición superior del footer
    const scrollY = window.scrollY + window.innerHeight; // Posición del viewport

    if (scrollY >= footerTop) {
        whatsappButton.style.bottom = `${scrollY - footerTop + 20}px`;
    } else {
        whatsappButton.style.bottom = '20px';
    }
}

// Ejecutar al cargar la página y en cada scroll
window.addEventListener('scroll', adjustWhatsAppButton);