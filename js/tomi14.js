document.addEventListener('DOMContentLoaded', function () {
    // 1. Lógica del Temporizador (Countdown)

    // Define la fecha del evento (Nov 16, 2025, 2:00 PM)
    // Nota: El año 2025 se asume basado en la fecha actual del contexto (Nov 17, 2025)
    // y para asegurar que el contador tenga sentido.
    const eventDate = new Date('November 16, 2025 14:00:00').getTime();

    const countdown = setInterval(function () {
        const now = new Date().getTime();
        const distance = eventDate - now;

        // Cálculo de días, horas, minutos y segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualizar los elementos en el HTML (usando selectores basados en la estructura)
        if (document.querySelectorAll('.timer-box p').length === 4) {
            document.querySelectorAll('.timer-box p')[0].innerHTML = days.toString().padStart(2, '0');
            document.querySelectorAll('.timer-box p')[1].innerHTML = hours.toString().padStart(2, '0');
            document.querySelectorAll('.timer-box p')[2].innerHTML = minutes.toString().padStart(2, '0');
            document.querySelectorAll('.timer-box p')[3].innerHTML = seconds.toString().padStart(2, '0');
        }

        // Cuando la cuenta regresiva termina
        if (distance < 0) {
            clearInterval(countdown);
            if (document.querySelectorAll('.timer-box p').length === 4) {
                document.querySelectorAll('.timer-box p').forEach(p => p.innerHTML = "00");
                // Podrías añadir un mensaje de "¡El evento es ahora!"
            }
        }
    }, 1000);

    // 2. Lógica para los botones de RSVP (ejemplo)
    const btnYes = document.querySelector('.btn-yes');
    const btnNo = document.querySelector('.btn-no');

    function setActiveRsvp(activeBtn, inactiveBtn) {
        // Elimina clases de activo/primario en el inactivo
        inactiveBtn.classList.remove('btn-yes', 'fw-bold');
        inactiveBtn.classList.add('btn-no', 'fw-medium');

        // Aplica clases de activo/primario en el activo
        activeBtn.classList.remove('btn-no', 'fw-medium');
        activeBtn.classList.add('btn-yes', 'fw-bold');
    }

    if (btnYes && btnNo) {
        btnYes.addEventListener('click', () => setActiveRsvp(btnYes, btnNo));
        btnNo.addEventListener('click', () => setActiveRsvp(btnNo, btnYes));
    }
});