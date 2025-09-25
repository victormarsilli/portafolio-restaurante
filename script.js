document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIONALIDAD DE CAMBIO DE IDIOMA ---

    const translations = {
        es: {
            pageTitle: 'Sabores Frescos - Portafolio Web',
            inicio: 'Inicio',
            menu: 'Menú',
            sugerencias: 'Sugerencias',
            testimonial1: '"¡La comida está de lujo! Sabores únicos y un ambiente increíble."',
            testimonial2: '"¡El mejor lugar para comer sano y delicioso!"',
            testimonial3: '"¡Para chuparse los dedos! Volveremos pronto."',
            menuTitle: 'Nuestro Menú',
            menuItem1Title: 'Ensalada Vital',
            menuItem1Desc: 'Una mezcla de hojas verdes, aguacate, tomate cherry, y nueces.',
            menuItem2Title: 'Bowl Energético',
            menuItem2Desc: 'Arroz integral, pollo a la parrilla, brócoli, y una salsa especial.',
            menuItem3Title: 'Batido Tropical',
            menuItem3Desc: 'Mango, piña, y un toque de menta. Sabor refrescante garantizado.',
            suggestionTitle: '¡Tu Sabor, Nuestra Próxima Creación!',
            suggestionText: '¿Tienes una idea para un plato nuevo? ¡Cuéntanos! Nos encantaría escuchar tus sugerencias.',
            formName: 'Tu Nombre:',
            formSuggestion: 'Tu Sugerencia:',
            formSubmit: 'Enviar Sugerencia',
            footerText: '&copy; 2025 Sabores Frescos. Hecho con ❤️ para un portafolio.',
            formMessage: '¡Gracias por tu sugerencia! La tendremos en cuenta.'
        },
        en: {
            pageTitle: 'Fresh Flavors - Web Portfolio',
            inicio: 'Home',
            menu: 'Menu',
            sugerencias: 'Suggestions',
            testimonial1: '"The food is amazing! Unique flavors and an incredible atmosphere."',
            testimonial2: '"The best place to eat healthy and delicious food!"',
            testimonial3: '"Mouth-watering! We will be back soon."',
            menuTitle: 'Our Menu',
            menuItem1Title: 'Vital Salad',
            menuItem1Desc: 'A mix of green leaves, avocado, cherry tomato, and walnuts.',
            menuItem2Title: 'Energy Bowl',
            menuItem2Desc: 'Brown rice, grilled chicken, broccoli, and a special sauce.',
            menuItem3Title: 'Tropical Smoothie',
            menuItem3Desc: 'Mango, pineapple, and a touch of mint. A guaranteed refreshing taste.',
            suggestionTitle: 'Your Flavor, Our Next Creation!',
            suggestionText: 'Do you have an idea for a new dish? Tell us! We would love to hear your suggestions.',
            formName: 'Your Name:',
            formSuggestion: 'Your Suggestion:',
            formSubmit: 'Send Suggestion',
            footerText: '&copy; 2025 Fresh Flavors. Made with ❤️ for a portfolio.',
            formMessage: 'Thank you for your suggestion! We will take it into account.'
        }
    };

    const languageButtons = document.querySelectorAll('.lang-btn');

    function setLanguage(lang) {
        const langData = translations[lang];
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            // Nota: El título de la página es el único que puede variar el contenido
            if (key === 'pageTitle') {
                 document.title = langData[key];
            } else if (langData[key]) {
                element.textContent = langData[key];
            }
        });
        languageButtons.forEach(btn => btn.classList.remove('active'));
        document.getElementById(`lang-${lang}`).classList.add('active');
    }

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.id.split('-')[1];
            setLanguage(lang);
        });
    });

    // --- FUNCIONALIDAD DEL CARRUSEL (Solo en index.html) ---
    const sliderTrack = document.querySelector('.slider-track');
    if (sliderTrack) {
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;
        const slideInterval = 5000;

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider();
        }

        function updateSlider() {
            const offset = -currentSlide * slides[0].offsetWidth;
            sliderTrack.style.transform = `translateX(${offset}px)`;
        }

        setInterval(nextSlide, slideInterval);
    }

    // --- FUNCIONALIDAD DE ANIMACIÓN AL HACER SCROLL (Solo en index.html) ---
    if (document.querySelector('.animate-on-scroll')) {
        const sectionsToAnimate = document.querySelectorAll('.animate-on-scroll');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        sectionsToAnimate.forEach(section => {
            observer.observe(section);
        });
    }
    
    // --- FUNCIONALIDAD DEL FORMULARIO (Solo en sugerencias.html) ---
    const form = document.getElementById('suggestionForm');
    if (form) {
        const formMessage = document.getElementById('form-message');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const sugerencia = document.getElementById('sugerencia').value;

            console.log(`Nueva sugerencia de ${nombre}: ${sugerencia}`);

            formMessage.textContent = '¡Gracias por tu sugerencia! La tendremos en cuenta.';
            formMessage.style.color = 'var(--color-verde)';

            form.reset();

            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        });
    }
});