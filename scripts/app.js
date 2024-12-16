// Función para cargar archivos HTML en secciones específicas
function loadSection(sectionId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => document.getElementById(sectionId).innerHTML = data)
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Cargar cada sección en su contenedor
loadSection('home', 'sections/home.html');
loadSection('about', 'sections/about.html');
loadSection('services', 'sections/services.html');
loadSection('contact', 'sections/contact.html');