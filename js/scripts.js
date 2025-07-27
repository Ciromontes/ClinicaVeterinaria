/**
 * Scripts generales para Clínica Veterinaria PetCare
 * Autor: [Tu Nombre]
 * Fecha: 27/04/2025
 * Versión: 1.0
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado completamente');
    
    // Inicializar tooltips de Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Inicializar popovers de Bootstrap
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
    
    // Manejar el evento de scroll para la barra de navegación
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Manejar el envío de formularios de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Simulación de envío de formulario
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.disabled = true;
            submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';
            
            // Simulación de tiempo de procesamiento
            setTimeout(function() {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                
                // Mostrar mensaje de éxito
                const alertPlaceholder = document.getElementById('alertPlaceholder');
                if (alertPlaceholder) {
                    const wrapper = document.createElement('div');
                    wrapper.innerHTML = `
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    `;
                    alertPlaceholder.append(wrapper);
                    
                    // Limpiar el formulario
                    contactForm.reset();
                }
            }, 2000);
        });
    }
    
    // Manejar el formulario de citas
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Simulación de reserva de cita
            const submitButton = appointmentForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.disabled = true;
            submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Procesando...';
            
            // Simulación de tiempo de procesamiento
            setTimeout(function() {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                
                // Mostrar mensaje de éxito
                const alertPlaceholder = document.getElementById('alertPlaceholder');
                if (alertPlaceholder) {
                    const wrapper = document.createElement('div');
                    wrapper.innerHTML = `
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            ¡Cita agendada con éxito! Te hemos enviado un correo con los detalles.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    `;
                    alertPlaceholder.append(wrapper);
                    
                    // Limpiar el formulario
                    appointmentForm.reset();
                }
            }, 2000);
        });
    }

    //modo oscuro - boton
    document.getElementById("modoOscuro").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode"); 
    });
})