function switchLanguage(language, flag) {
    if (language === 'fr') {
        // English
        document.getElementById('nav-welcome').textContent = 'Mariage Ana & Jaime';
        document.getElementById('nav-details-link').textContent = 'Mariage';
        document.getElementById('nav-photo-link').textContent = 'Télécharger une photo';
        document.getElementById('nav-rsvp-link').textContent = 'RSVP';
        document.getElementById('couple-names').textContent = 'On va se marier!';
        document.getElementById('couple-date').textContent = '27 octobre 2023';
        document.getElementById('details-title').textContent = 'Mariage';
        document.getElementById('ceremony-title').textContent = 'Cérémonie';
        document.getElementById('ceremony-date').textContent = '27 octobre 2023';
        document.getElementById('ceremony-map').textContent = 'Voir la carte';
        document.getElementById('ceremony-calendar').textContent = 'Ajouter au calendrier';
        document.getElementById('reception-title').textContent = 'Fête';
        document.getElementById('event-date').textContent = '27 octobre 2023';
        document.getElementById('event-map').textContent = 'Voir la carte';
        document.getElementById('event-calendar').textContent = 'Ajouter au calendrier';
        document.getElementById('photo-title').textContent = 'Télécharger une photo';
        document.getElementById('share-message').textContent = 'Rendons le couple heureux ! Remplissez un album photo pendant ou après le jour du mariage. Veuillez utiliser le hashtag lorsque vous publiez des photos sur les réseaux sociaux';
        document.getElementById('qr-information').textContent = "Utilisez ce code QR pour accéder à un formulaire où vous pourrez télécharger vos photos et partager un moment. Pointez l'appareil photo de votre téléphone sur le code QR et suivez le lien. Chaque invité peut prendre une photo puis télécharger les photos pendant le jour du mariage ou plus tard.";
        document.getElementById('photo-limit').textContent = 'La limite est de 10 photographies par formulaire.';
        document.getElementById('size-limit').textContent = 'Vous pouvez saisir le formulaire autant de fois que vous le souhaitez. Les photos ne doivent pas dépasser 100 Mo.';
        document.getElementById('rsvp-title').textContent = 'RSVP';
        document.getElementById('rsvp-message').textContent = 'Nous sommes ravis de célébrer notre grand jour avec vous, pensez à confirmer votre présence avant le 12 octobre 2023.';
        document.getElementById('label_name').textContent = 'Prénom *';
        document.getElementById('label_lastname').textContent = 'Nom de famille *';
        document.getElementById('label_email').textContent = 'Cérémonie';
        document.getElementById('attendance').textContent = 'Serez-vous présent? *';
        document.getElementById('label_yes').textContent = 'Oui';
        document.getElementById('label_no').textContent = 'Non';
        document.getElementById('comments').textContent = 'Commentaires ou questions *';
        document.getElementById('send-button').textContent = 'Soumettre';
        document.getElementById('details-rsvp').textContent = 'RSVP';
        document.getElementById('details2-rsvp').textContent = 'RSVP';
        document.getElementById('Fiesta1').textContent = "La fête aura lieu dans une maison à la campagne.";
        document.getElementById('Fiesta5').textContent = 'Il y a de l’espace disponible pour dormir sur place si tu le souhaites, juste pense à ramener ton sac de couchage!';
        document.getElementById('Fiesta2').textContent = "La célébration aura une dynamique de partage, donc, fais ton meilleur plat et ramène-le avec ta boisson préférée. L’idée, c'est d’avoir de la variété avec l'apport de chacun.";
        document.getElementById('Fiesta3').textContent = "Il y aura de la musique en Live et de la place, donc si tu veux jouer un instrument, chanter, danser ou autre, tu es le bienvenu.";
        document.getElementById('Fiesta4').textContent = "Nous ne voulons imposer aucun code vestimentaire, viens comme tu le sens, juste pense à te doucher quand même! 😊";
        document.getElementById('PD-message').textContent = "PS: Tenue en blanche interdite.";
    } else if (language === 'es') {
        // Español
        document.getElementById('nav-welcome').textContent = 'Boda de Ana & Jaime';
        document.getElementById('nav-details-link').textContent = 'Boda';
        document.getElementById('nav-photo-link').textContent = 'Subir una foto';
        document.getElementById('nav-rsvp-link').textContent = 'Asistencia';
        document.getElementById('couple-names').textContent = '¡Nos vamos a casar!';
        document.getElementById('couple-date').textContent = '27 octubre 2023';
        document.getElementById('details-title').textContent = 'Boda';
        document.getElementById('ceremony-title').textContent = 'Ceremonia';
        document.getElementById('ceremony-date').textContent = '27 octubre 2023';
        document.getElementById('ceremony-map').textContent = 'Ver mapa';
        document.getElementById('ceremony-calendar').textContent = 'Agendar en calendario';
        document.getElementById('reception-title').textContent = 'Fiesta';
        document.getElementById('event-date').textContent = '27 octubre 2023';
        document.getElementById('event-map').textContent = 'Ver mapa';
        document.getElementById('event-calendar').textContent = 'Agendar en calendario';
        document.getElementById('photo-title').textContent = 'Subir una foto';
        document.getElementById('share-message').textContent = '¡Hagamos felices a los novios! Llena un álbum de fotos durante el día de la boda o después. Por favor, utiliza el hashtag cuando publiques fotos en las redes sociales';
        document.getElementById('qr-information').textContent = 'Utiliza este código QR para dirigirte a un formulario donde podras subir tus fotos y compartir un momento. Apunta la cámara del teléfono al código QR y sigue el enlace.Cada invitado puede hacer una foto y luego subir las fotos durante el día de la boda o más tarde.';
        document.getElementById('photo-limit').textContent = 'El límite es 10 fotografías por formulario.';
        document.getElementById('size-limit').textContent = 'Se puede ingresar al formulario cuantas veces desees. Las fotos no deben exceder los 100MB.';
        document.getElementById('rsvp-title').textContent = 'Asistencia';
        document.getElementById('rsvp-message').textContent = 'Estamos felices de celebrar contigo este día tan especial, por favor confirma tu asistencia antes del 12 de octubre 2023.';
        document.getElementById('label_name').textContent = 'Nombre *';
        document.getElementById('label_lastname').textContent = 'Apellido *';
        document.getElementById('label_email').textContent = 'Email *';
        document.getElementById('attendance').textContent = '¿Estarás presente? *';
        document.getElementById('label_yes').textContent = 'Si';
        document.getElementById('label_no').textContent = 'No';
        document.getElementById('comments').textContent = 'Comentarios o preguntas';
        document.getElementById('send-button').textContent = 'Enviar';
        document.getElementById('details-rsvp').textContent = 'Confirmar asistencia';
        document.getElementById('details2-rsvp').textContent = 'Confirmar asistencia';
        document.getElementById('Fiesta1').textContent = 'La fiesta se llevará a cabo en una casa campestre.';
        document.getElementById('Fiesta5').textContent = 'Hay algunas habitaciones disponibles y espacios para dormir allí si lo deseas. Lleva tu propio saco de dormir en caso de que quieras continuar con nosotros el festejo hasta el amanecer.';
        document.getElementById('Fiesta2').textContent = 'Nuestra celebración tendrá una dinámica de compartir, por favor prepara tu mejor platillo y tráelo con la bebida que más te guste. En la variedad está el placer!';
        document.getElementById('Fiesta3').textContent = 'Habrá música en vivo y espacio, si deseas cantar, tocar algún instrumento, bailar u otros eres más que bienvenido!';
        document.getElementById('Fiesta4').textContent = 'No imponemos un código de vestimenta, solo vénganse bonitos y gorditos muchachos 😊';
        document.getElementById('PD-message').textContent = 'Pd: Por favor NO venir de blanco.';
    }

    // Update the selected language and flag
    document.getElementById('language-toggle').textContent = language === 'fr' ? '🇫🇷' : '🇨🇴🇨🇱';
}

// JavaScript to toggle between languages
const languageButton = document.getElementById('language-toggle');
let currentLanguage = 'es'; // Initial language

languageButton.addEventListener('click', () => {
    // Toggle between languages
    currentLanguage = currentLanguage === 'es' ? 'fr' : 'es';
    if (window.innerWidth < 991) {
        mobileMenuToggle.click();
    }
    
    // You can perform actions based on the selected language here
    // For example, change text content, update elements, etc.
    switchLanguage(currentLanguage);
});
// Get all navbar links
const navbarLinks = document.querySelectorAll('.nav-link');
const brandLink = document.querySelector('.navbar-brand');
const flagCircle = document.querySelector('.language-flag-circle')

// Function to change navbar text color based on section
function setNavbarTextColor(sectionId) {
    const bodyElement = document.body;
    if (sectionId === 'welcome') {
        // If in the welcome section, set text color to white
        navbarLinks.forEach((link) => {
            link.style.color = '#fff';
        });
        brandLink.style.color = '#fff';
        bodyElement.style.backgroundImage = "url('images/blue1.jpg')"; 
    } else {
        // If in other sections, set text color to blue
        if (window.innerWidth > 991) {
            navbarLinks.forEach((link) => {
                link.style.color = '#07203e'; // Change this to your desired blue color
            });
        } else {
            navbarLinks.forEach((link) => {
                link.style.color = '#fff';
            });
        }
        brandLink.style.color = '#07203e';
        bodyElement.style.backgroundImage = "url('images/orchid3.jpg')"; 
    }
}

// Function to observe section visibility
function observeSections() {
    const sections = document.querySelectorAll('.section[id]');
    const observerOptions = {
        threshold: 0.2, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                setNavbarTextColor(sectionId);
            }
        });
    }, observerOptions);

    sections.forEach((section) => {
        observer.observe(section);
    });
}

// Initialize section observation
observeSections();

// Initialize Email.js with your custom email service
emailjs.init("M_564O6aW_AC0xf8H"); // Replace with your Email.js API key

// Handle form submission
document.getElementById("rsvp-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect guest's answers
    const guestName = document.getElementById("guest_name").value;
    const guestLastName = document.getElementById("guest_lastname").value;
    const guestEmail = document.getElementById("guest_email").value;
    // const guestAttendance = document.getElementById("guest_attendance").value;
    const guestComment = document.getElementById("guest_comment").value;
    const attendingOption = document.querySelector('input[name="guest_attendance"]:checked').value;

    // Compose the email content
    const emailContent = `
        Guest Name: ${guestName}
        Guest Lastname: ${guestLastName}
        Guest Email: ${guestEmail}
        Attendance Status: ${attendingOption}
        Comments: ${guestComment}
    `;

    // Send the email using your custom email service and template
    emailjs.send("service_l4wjy8s", "template_hsmjjod", {
        message: emailContent,
    })
    .then(function(response) {
        // Display a success alert to the user
        showCustomAlert("Email sent successfully!", "custom-alert-success");
        
    }, function(error) {
        console.error("Email send error:", error);
        // Display an error alert to the user
        showCustomAlert("Email sending failed. Please try again later.", "custom-alert-danger");
    });
});

// Function to clear the form fields
function clearForm() {
    document.getElementById('guest_name').value = '';
    document.getElementById('guest_lastname').value = '';
    document.getElementById("guest_email").value = '';
    document.querySelector('input[name="guest_attendance"]:checked').checked = false;
    document.getElementById('guest_comment').value = '';
}

// Function to display a custom-styled alert
function showCustomAlert(message, className) {
    const customAlert = document.getElementById('custom-alert');
    customAlert.textContent = message;
    customAlert.className = `custom-alert ${className}`;
    customAlert.style.display = 'block';

    // Set a timeout to hide the alert after 'timeout' milliseconds (e.g., 5000 ms for 5 seconds)
    setTimeout(function() {
        customAlert.style.display = 'none';
        // Clear the form after successful submission
        clearForm();
    }, 2000);
}

// JavaScript to handle section visibility
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll("nav a, .details-rsvps");
const mobileMenuToggle = document.querySelector(".navbar-toggler");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetSectionId = link.getAttribute("href").substring(1); // Remove "#" from href
        toggleSections(targetSectionId);
        if (targetSectionId !== "welcome" && window.innerWidth < 991) {
            mobileMenuToggle.click();
        }
    });
});

function toggleSections(targetSectionId) {
    sections.forEach((section) => {
        if (section.id === targetSectionId) {
            section.style.display = "block"; // Show the target section
        } else {
            section.style.display = "none"; // Hide other sections
        }
    });
}

// Initially, show the welcome section and hide others
toggleSections("welcome");
