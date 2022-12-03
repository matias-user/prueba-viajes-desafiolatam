// Para qué funcione el tooltip.
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map( tooltip => new bootstrap.Tooltip(tooltip) );

// Activar alert mensaje enviado.
const btnSend = document.getElementById('send');
btnSend.onclick = () => {
    const alert = document.getElementById('myAlert');
    alert.classList.add('show');
};
