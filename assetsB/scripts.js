function switchLanguage(language, flag) {
    if (language === 'fr') {
        // English
        document.getElementById('nav-welcome').textContent = 'Mariage Ana & Jaime';
        document.getElementById('nav-details-link').textContent = 'Details';
        document.getElementById('nav-photo-link').textContent = 'Photo';
        document.getElementById('nav-rsvp-link').textContent = 'RSVP';
        document.getElementById('couple-names').textContent = 'On va se marier!';
        document.getElementById('couple-date').textContent = '27 octobre 2023';
        document.getElementById('details-title').textContent = 'Wedding Details';
        document.getElementById('event-date').textContent = 'Saturday, October 15, 2023';
        document.getElementById('event-location').textContent = 'Central Park, New York City';
    } else if (language === 'es') {
        // Español
        document.getElementById('nav-welcome').textContent = 'Boda de Ana & Jaime';
        document.getElementById('nav-details-link').textContent = 'Detalles';
        document.getElementById('nav-photo-link').textContent = 'Foto';
        document.getElementById('nav-rsvp-link').textContent = 'Reserva';
        document.getElementById('couple-names').textContent = '¡Nos vamos a casar!';
        document.getElementById('couple-date').textContent = '27 octubre 2023';
        document.getElementById('details-title').textContent = 'Detalles de la Boda';
        document.getElementById('event-date').textContent = 'Sábado, 15 de Octubre de 2023';
        document.getElementById('event-location').textContent = 'Central Park, Nueva York';
    }

    // Update the selected language and flag
    document.getElementById('selectedFlag').textContent = language === 'fr' ? '🇫🇷' : '🇨🇴🇨🇱';
}
