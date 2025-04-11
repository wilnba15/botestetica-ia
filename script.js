
const chatbox = document.querySelector('.chatbox');

function addResponse(message) {
    const response = document.createElement('div');
    response.className = 'bot-msg';
    response.textContent = message;
    chatbox.appendChild(response);
}

document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const text = btn.textContent.trim();
        if (text === "Ver tratamientos") {
            addResponse("Ofrecemos:\n- Ácido hialurónico\n- Toxina botulínica\n- Hidrafacial\n- Lifting sin cirugía");
        } else if (text === "Agendar cita") {
            addResponse("Por favor, completa el formulario en la parte inferior para agendar tu cita 😊");
        } else if (text === "Promociones") {
            addResponse("🔥 Promoción de Abril:\nBotox + Limpieza facial por $99\nRejuvenecimiento facial 25% off");
        } else {
            addResponse("Lo siento, esa opción aún no está disponible.");
        }
    });
});
